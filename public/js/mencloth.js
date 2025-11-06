
const productGrid = document.getElementById("productGrid");
const bags = [
//   {
//     image: "",
//     originalPrice: "pkr /-",
//     price:,
//     discount: "-%",
//     orderLink: "",
//     description: "",
//     site: "",
//   },
{
    image: "https://spunkymart.pk/cdn/shop/files/Glitter-fancy-clutch.jpg?v=1704369863",
    originalPrice: "pkr 2,000/-",
    price: 1400,
    discount: "-30% OFF",
    orderLink: "https://spunkymart.pk/products/glitter-clutch-bag-women-evening-formal-purse",
    description: "Glitter Clutch Bag Women Evening Formal Purse",
    site: "Spunkymart",
  },{
    image: "https://spunkymart.pk/cdn/shop/files/Glitter-fancy-clutch.jpg?v=1704369863",
    originalPrice: "pkr 2,000/-",
    price: 1400,
    discount: "-30% OFF",
    orderLink: "https://spunkymart.pk/products/glitter-clutch-bag-women-evening-formal-purse",
    description: "Glitter Clutch Bag Women Evening Formal Purse",
    site: "Spunkymart",
  },
]; 

// Populate gallery
bags.forEach((bag, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    item.innerHTML = `
          <a href="#">
          <img src="${bag.image}" alt="bag" data-index="${index}"
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
      visible.innerHTML = ""; // ensure container empties
      return;
    }
   
    noResults.style.display = "none";
    productGrid.style.display = "none";
    visible.style.display = "";
    displayProductsInContainer(visible, filteredProducts);
  }
  
  // On page load populate main grid
  displayProductsInContainer(productGrid, bags);
  
  const options = {
    keys: ["description", "site"],
    includeScore: true,
    threshold: 0.3,
  };
  
  const fuse = new Fuse(bags, options);
  
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
        keys: ["description", "site"],
        threshold: 0.3,
      });
      results = fuse.search(word).map((r) => r.item);
    });
  
    displayProducts(results);
  }
  searchInput.addEventListener("input", filterProducts);
   