let bags = [];
let productGrid = document.getElementById("productGrid");
let searchInput = document.getElementById("searchInput");
let noResults = document.getElementById("noResults");
let visible = document.getElementById("product_visible");

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

    setTimeout(restoreSavedButtons, 300);

  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

function displayProductsInContainer(container, items) {
  container.innerHTML = "";
  items.forEach((bag, idx) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.dataset.index = idx;
    item.innerHTML = `
      <a href="javascript:void(0)">
        <img src="${bag.image}" alt="bag" data-index="${idx}"
          onerror="this.onerror=null; this.src='/images/pngegg.png';">
      </a>
      <span class="discount-tag">${bag.discount}</span>
      <div class="product-description">${bag.description} <span>(${bag.site})</span></div>
      <div class="overlay">
        <div class="original"><span>${bag.originalPrice}</span></div>
        <button class="order-btn">${bag.price}</button>
        <button class="like-btn" data-id="${bag.id}">♡</button>
      </div>
    `;
    container.appendChild(item);
  });
}
productGrid.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("like-btn")) return;

  const btn = e.target;
  const idx = btn.closest(".gallery-item").dataset.index;
  const bag = bags[idx];
  if (!bag) return;

  const isSaved = btn.classList.contains("saved");

  const url = isSaved ? "/remove-item" : "/save-item";
  const body = isSaved
    ? { productId: bag.id }
    : {
      productId: bag.id,
      image: bag.image,
      description: bag.description,
      price: bag.price,
      site: bag.site,
      discount: bag.discount,
      originalPrice: bag.originalPrice,
      orderLink: bag.orderLink
    };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!data.success) {
      showAuthPopup();
      return;
    }

    btn.classList.toggle("saved");
    updateLikeButtonUI(btn, !isSaved);
    showToast(isSaved ? "Item removed ❌" : "Item saved ❤️");

  } catch (err) {
    console.error(err);
  }
});

function updateLikeButtonUI(btn, saved) {
  if (saved) {
    btn.textContent = "❤️";
    btn.style.backgroundColor = "#f1ab89";
    btn.style.color = "white";
  } else {
    btn.textContent = "♡";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  }
}


function showToast(message, duration = 1500) {
  const toast = document.getElementById("toasted");
  toast.textContent = message;
  toast.style.opacity = "1";
  setTimeout(() => toast.style.opacity = "0", duration);
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

searchInput.addEventListener("input", filterProducts);

function filterProducts() {
  const query = searchInput.value.trim();
  if (!query) return displayProducts(null);

  const words = query.split(/\s+/);
  const numbers = words.filter(w => /^\d+$/.test(w));
  let priceQuery = numbers.length > 0 ? parseInt(numbers[0], 10) : null;

  let results = bags;

  if (priceQuery) {
    results = results.filter(bag => Math.abs(bag.price - priceQuery) <= 500);
    words.splice(words.indexOf(numbers[0]), 1);
  }

  words.forEach(word => {
    const fuse = new Fuse(results, {
      keys: ["description", "site", "discount", "originalPrice"],
      threshold: 0.3,
    });
    results = fuse.search(word).map(r => r.item);
  });

  displayProducts(results);
}
loadProducts();
async function restoreSavedButtons() {
  try {
    const res = await fetch("/saved-items");
    const savedItems = await res.json();
    const savedIds = savedItems.map(i => i.productId);

    document.querySelectorAll(".like-btn").forEach(btn => {
      if (savedIds.includes(btn.dataset.id)) {
        btn.classList.add("saved");
        updateLikeButtonUI(btn, true);
      }
    });
  } catch (err) {
    console.error(err);
  }
}