const savedItemsContainer = document.getElementById("productGrid");

async function fetchSavedItems() {
  const res = await fetch("/saved-items");
  const items = await res.json();
  displaySavedItems(items);
}

function displaySavedItems(items) {
  savedItemsContainer.innerHTML = "";
  if (!items.length) {
    savedItemsContainer.innerHTML = "<p class='no-saved'>No saved items yet 😔</p>";
    return;
  }

  items.forEach(bag => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
      <a onclick="handleRedirect('${bag.orderLink}')" target="_blank">
        <img src="${bag.image}" alt="${bag.description}">
      </a>
      <span class="discount-tag">${bag.discount}</span>
      <div class="product-description">${bag.description} <span>(${bag.site})</span></div>
      <div class="overlay">
        <div class="original"><span>${bag.originalPrice}</span></div>
        <button class="order-btn" onclick="handleRedirect('${bag.orderLink}')">${bag.price}</button>
        <button class="like-btn liked" onclick="removeSavedItem('${bag.productId}')">❤️</button>
      </div>
    `;
    savedItemsContainer.appendChild(div);
  });
}

async function removeSavedItem(productId) {
  await fetch("/remove-item", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin", 
    body: JSON.stringify({ productId })
  });
  fetchSavedItems();
}
 
fetchSavedItems();