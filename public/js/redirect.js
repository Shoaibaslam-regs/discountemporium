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
    .then(data => {
      if (data.loggedIn) {
        window.location.href = `/go?url=${encodeURIComponent(url)}`;
      } else {
        fetch("/save-redirect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url })
        });

        showAuthPopup();
      }
    })
    .catch(console.error);
} 