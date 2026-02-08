function showAuthPopup() {
  const overlay = document.getElementById("authOverlay");
  overlay.classList.add("show");
}

function hideAuthPopup() {
  const overlay = document.getElementById("authOverlay");
  overlay.classList.remove("show");
}

document.getElementById("closeAuthPopup").addEventListener("click", hideAuthPopup);

document.getElementById("authOverlay").addEventListener("click", function (e) {
  if (e.target.id === "authOverlay") hideAuthPopup();
});

function handleRedirect(url) {
  fetch("/auth-status")
    .then(res => res.json())
    .then(async auth => {

      if (!currentBag) return;

      if (!auth.loggedIn) {

        sessionStorage.setItem("pendingPurchase", JSON.stringify(currentBag));
        sessionStorage.setItem("pendingOrderLink", url);

        fetch("/save-redirect", {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url })
        });

        showAuthPopup();
        return;
      }

      const userRes = await fetch("/current-user");
      const userData = await userRes.json();

      if (!userData.loggedIn) return;

      await savePurchase(currentBag, url, userData);

      window.location.href = `/go?url=${encodeURIComponent(url)}`;
    })
    .catch(console.error);
}
async function savePurchase(bag, url, user) {
  try {
    await fetch("/api/purchase", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.userId,
        email: user.email,
        productName: bag.description,
        site: bag.site,
        price: bag.price,
        originalPrice: bag.originalPrice,
        discount: bag.discount,
        image: bag.image,
        orderLink: url
      })
    });
  } catch (err) {
    console.error("Purchase save error", err);
  }
}
window.addEventListener("load", async () => {
  const pendingBag = sessionStorage.getItem("pendingPurchase");
  const pendingLink = sessionStorage.getItem("pendingOrderLink");

  if (pendingBag && pendingLink) {
    const bag = JSON.parse(pendingBag);

    const res = await fetch("/current-user");
    const userData = await res.json();
    if (!userData.loggedIn) return;

    await savePurchase(bag, pendingLink, userData);

    sessionStorage.removeItem("pendingPurchase");
    sessionStorage.removeItem("pendingOrderLink");

  }
});
