function showToast(message, duration = 3000) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

function showHomeToastOnce() { 
  if (!sessionStorage.getItem("toastShown")) {
    showToast("Welcome to Discount Emporium!");
    sessionStorage.setItem("toastShown", "true");
  }
}

window.addEventListener("load", showHomeToastOnce);
window.addEventListener("pageshow", showHomeToastOnce);

const products = [ {
  name: "Sports", 
  image:"https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg?semt=ais_hybrid&w=740&q=80",
  visit: "/sports",
},
{
  name: "Ladies Bag",
  image:"https://www.luxe-cheshire.com/cdn/shop/collections/luxe_category_image_bags_v1_1600x.jpg?v=1745940159",
  visit: "/product",
},
{
  name: "Mens Wear",
  image:
    "https://www.muraqshman.com/cdn/shop/articles/master-the-art-of-eastern-elegance-with-kurta-trouser-shalwar-kameez-waistcoat-and-more-from-muraqsh-823246.jpg?v=1689180023&width=2048",
  visit:"/mencloth",
},
{
  name: "Women apparel",
  image:
    "https://cdn.shopify.com/s/files/1/0016/1542/9678/files/Maria_B_e9a10099-1e00-4ecb-b69b-a865c56279a7_1024x1024.jpg?v=1707769741",
visit:"/women",
},
{
  name: "Home & Kitchen",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1y1FFdpdNuGjkxpeafMHhdP1orfTEy0oF2A&s",
  visit:"/kitchen"
},
{
  name: "Cosmetic",
  image:
    "https://mir-s3-cdn-cf.behance.net/projects/404/198211197890935.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpeg",
  visit:"/cosmetic"
},
{
  name: "Clothings",
  image:
    "https://www.shutterstock.com/image-photo/clothes-on-clothing-hanger-600nw-2338282257.jpg",
    visit:"/clothings"
},
{
  name: "Shoes",
  image:
    "https://t3.ftcdn.net/jpg/04/36/65/92/360_F_436659277_vp2706cMybOmUSoGNbRDGeGWttlVOqL9.jpg",
  visit:"/shoes"
  },
 {
  name: "More...",
  image:
    "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
},];

const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productOut");
const noResults = document.getElementById("noResults");

function displayProducts(filteredProducts) {
  productGrid.innerHTML = "";
  if (filteredProducts.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  filteredProducts.forEach((product) => {
    const category = document.createElement("div");
    category.classList.add("product-category");
    category.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
     <a href="${product.visit}">View Product</a> 
    
  `;
    productGrid.appendChild(category);
  });
}

function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);

displayProducts(products);
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  let found = false;
  products.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    if (name.includes(query)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });
  if (!found) {
    noResults.classList.add("show");
    const value = document.getElementById("searchInput").value.trim();
    noResults.innerHTML = `No "${value}" category found 🚫`;
   } else {
    noResults.classList.remove("show");
  }
});



 