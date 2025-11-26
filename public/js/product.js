let bags = [];
let likedProducts = new Set(JSON.parse(localStorage.getItem("favourites")) || []);
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const visible = document.getElementById("product_visible");

productGrid.style.display = "";
visible.classList.add("show");

async function loadProducts() {
  const category = window.CATEGORY;

  try {
    const res = await fetch(`/api/products/${category}`);
    bags = await res.json();

    bags = bags.map((item, index) => ({
      ...item,
      id: `${category}-${index}-${btoa(item.image).slice(0, 8)}`
    }));

    displayProductsInContainer(productGrid, bags);
    setTimeout(() => restoreLikedButtons(), 300);
  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

function displayProductsInContainer(container, items) {
  container.innerHTML = "";
  items.forEach((bag, idx) => {
    const originalIndex = bags.indexOf(bag);
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <a href="#">
        <img src="${bag.image}" alt="bag" data-index="${originalIndex}"
          onerror="this.onerror=null; this.src='/images/pngegg.png';">
      </a>
      <span class="discount-tag">${bag.discount}</span>
      <div class="product-description">${bag.description} <span>(${bag.site})</span></div>
      <div class="overlay">
        <div class="original"><span>${bag.originalPrice}</span></div>
        <button class="order-btn" onclick="window.location.href='${bag.orderLink}'">${bag.price}</button>
        <button class="like-btn" data-id="${bag.id}">♡</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function displayProducts(filteredProducts) {
  if (!filteredProducts) {
    noResults.style.display = "none";
    productGrid.style.display = "";
    visible.style.display = "none";
    return;
  }

  if (filteredProducts.length === 0) {
    productGrid.style.display = "none";
    visible.style.display = "";
    noResults.style.display = "block";
    const value = searchInput.value.trim();
    noResults.innerHTML = `No "${value}" products found 🚫`;
    visible.innerHTML = "";
    return;
  }

  noResults.style.display = "none";
  productGrid.style.display = "none";
  visible.style.display = "";
  displayProductsInContainer(visible, filteredProducts);
}

function filterProducts() {
  const query = searchInput.value.trim();
  if (!query) {
    displayProducts(null);
    return;
  }

  const words = query.split(/\s+/);
  const numbers = words.filter((w) => /^\d+$/.test(w));
  let priceQuery = numbers.length > 0 ? parseInt(numbers[0], 10) : null;

  let results = bags;

  if (priceQuery) {
    results = results.filter((bag) => Math.abs(bag.price - priceQuery) <= 500);
    words.splice(words.indexOf(numbers[0]), 1);
  }

  words.forEach((word) => {
    const fuse = new Fuse(results, {
      keys: ["description", "site", "discount", "originalPrice"],
      threshold: 0.3,
    });
    results = fuse.search(word).map((r) => r.item);
  });

  displayProducts(results);
}

searchInput.addEventListener("input", filterProducts);

productGrid.addEventListener("click", (e) => {
  if (!e.target.classList.contains("like-btn")) return;

  const id = e.target.dataset.id;
  let message = "";

  if (likedProducts.has(id)) {
    likedProducts.delete(id);
    updateLikeButtonUI(e.target, false);
    message = "Removed Item ❌";
  } else {
    likedProducts.add(id);
    message = "Item Cart 🛒";
  }

  updateLikeButtonUI(e.target, likedProducts.has(id));

  localStorage.setItem("favourites", JSON.stringify([...likedProducts]));

  let old = JSON.parse(localStorage.getItem("favouritesData")) || [];
  let likedArray = bags.filter(bag => likedProducts.has(bag.id));

  likedArray.forEach(item => {
    if (!old.some(o => o.id === item.id)) {
      old.push(item);
    }
  });

  old = old.filter(o => likedProducts.has(o.id));
  localStorage.setItem("favouritesData", JSON.stringify(old));
  showToast(message);
});

function updateLikeButtonUI(btn, liked) {
  if (liked) {
    btn.textContent = "❤️";
    btn.style.backgroundColor = "#f1ab89";
    btn.style.color = "white";
  } else {
    btn.textContent = "♡";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  }
}

function restoreLikedButtons() {
  likedProducts.forEach(id => {
    const btn = document.querySelector(`.like-btn[data-id="${id}"]`);
    if (btn) updateLikeButtonUI(btn, true);
  });
}

function loadLikedFromStorage() {
  const saved = JSON.parse(localStorage.getItem("favouritesData")) || [];
  likedProducts = new Set(saved.map(item => item.id));
}

function updateUI() {
  document.querySelectorAll(".save-icon").forEach(icon => {
    const id = parseInt(icon.dataset.id);
    if (likedProducts.has(id)) {
      icon.classList.add("saved");
    } else {
      icon.classList.remove("saved");
    }
  });
}

window.addEventListener("storage", () => {
  likedProducts = new Set(JSON.parse(localStorage.getItem("favourites")) || []);
  restoreLikedButtons();
  loadLikedFromStorage();
  updateUI();
});

loadProducts();
function showToast(message, duration = 1500) {
  const toast = document.getElementById("toasted");
  toast.textContent = message;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, duration);
}
