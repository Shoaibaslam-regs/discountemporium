let savedItemsContainer = document.getElementById("productGrid");
let favouritesData = JSON.parse(localStorage.getItem("favouritesData")) || [];
let likedProducts = new Set(JSON.parse(localStorage.getItem("favourites")) || []);


function removeItem(id) {
  favouritesData = favouritesData.filter(item => item.id !== id);
  localStorage.setItem("favouritesData", JSON.stringify(favouritesData));
 
  window.dispatchEvent(new Event("favourites-updated"));

  displaySavedItems(favouritesData);
}

function displaySavedItems(items) {
  savedItemsContainer.innerHTML = "";
  if(items.length === 0) {
    savedItemsContainer.innerHTML = "<p  class='no-saved'>No saved items yet 😔</p>";
    return;
  }

  items.forEach(bag => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
      <a href="${bag.orderLink}" target="_blank">
        <img src="${bag.image}" alt="${bag.description}" onerror="this.onerror=null; this.src='/images/pngegg.png';">
      </a>
      <span class="discount-tag">${bag.discount}</span>
      <div class="product-description">${bag.description} <span>(${bag.site})</span></div>
      <div class="overlay">
        <button class="order-btn" onclick="window.open('${bag.orderLink}','_blank')">${bag.price}</button>
        <button class="like-btn ${likedProducts.has(bag.id) ? 'liked' : ''}" data-id="${bag.id}">❤️</button>
      </div>
    `;
    savedItemsContainer.appendChild(div);
  });

  addLikeButtonListeners();
}

function addLikeButtonListeners() {
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
 
      likedProducts.delete(id);
      localStorage.setItem("favourites", JSON.stringify([...likedProducts]));
      favouritesData = favouritesData.filter(item => item.id !== id);
      localStorage.setItem("favouritesData", JSON.stringify(favouritesData));
       displaySavedItems(favouritesData);
    });
  });
} 

displaySavedItems(favouritesData);

window.addEventListener("storage", () => {
    likedProducts = new Set(JSON.parse(localStorage.getItem("favourites")) || []);
    favouritesData = JSON.parse(localStorage.getItem("favouritesData")) || [];

    restoreLikedButtons();
    displaySavedItems(favouritesData); 
});