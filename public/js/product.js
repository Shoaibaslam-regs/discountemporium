let bags = [];
async function loadProducts() {
  const category = window.CATEGORY;

  try {
    const res = await fetch(`/api/products/${category}`);
    bags = await res.json();

    displayProductsInContainer(productGrid, bags);
  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

loadProducts();

bags.forEach((bag, index) => {
  const item = document.createElement("div");
  item.classList.add("gallery-item");
  item.innerHTML = `
         <a href="#">
  <img 
    src="${bag.image}" 
    alt="${bag.description} – ${bag.site} product" 
    loading="lazy"
    decoding="async"
    fetchpriority="low"
    onerror="this.onerror=null; this.src='/images/pngegg.png';">
</a>

        <span class="discount-tag">${bag.discount}</span>
        <div class="product-description">${bag.description} <span>(${bag.site})</span></div>
        <div class="overlay">
        <div class="original"><span>${bag.originalPrice}</span></div>
            <button class="order-btn" onclick="window.location.href="#">${bag.price}</button>
            <button class="like-btn" data-index="${index}">♡</button>
        </div>
    `;
  productGrid.appendChild(item);
});
 
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const visible = document.getElementById("product_visible");

productGrid.style.display = "";
visible.classList.add("show");


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
        <button class="like-btn" data-index="${originalIndex}">♡</button>
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
displayProductsInContainer(productGrid, bags);
  
 
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
    results = results.filter((bag) => {
      return Math.abs(bag.price - priceQuery) <= 500;
    });

    words.splice(words.indexOf(numbers[0]), 1);
  }

  words.forEach((word) => {
    const fuse = new Fuse(results, {
      keys: ["description", "site","discount","originalPrice"],
      threshold: 0.3,
    });
    results = fuse.search(word).map((r) => r.item);
  });

  displayProducts(results);
}
searchInput.addEventListener("input", filterProducts);
 