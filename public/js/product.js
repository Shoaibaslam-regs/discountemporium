
const productGrid = document.getElementById("productGrid");
const bags = [
  {
    image:
      "https://astore.pk/cdn/shop/files/cocoblack.jpg?v=1710488018&width=800",
    originalPrice: "pkr 7,138/-",
    price: 1499,
    discount: "-79% OFF",
    orderLink:
      "https://astore.pk/collections/shoulder-bags/products/coco-bag-black",
    description:
      "Elegant black leather handbag, perfect for work and casual outings.",
    site: "Astore",
  },
  {
    image:
      "https://astore.pk/cdn/shop/files/cruisebagbrown.jpg?v=1710488247&width=800",
    originalPrice: "pkr 8,000/-",
    price: 1649,
    discount: "-79% OFF",
    orderLink:
      "https://astore.pk/collections/handbags/products/cruise-bag-brown",
    description: "Cruise Bag Brown.",
    site: "Astore",
  },
  {
    image:
      "https://astore.pk/cdn/shop/files/beige4_46194d23-2eec-4375-8930-377994ed535e.jpg?v=1708348045&width=800",
    originalPrice: "pkr 8,000/-",
    price: 1799,
    discount: "-78% OFF",
    orderLink: "https://astore.pk/collections/handbags/products/fly-bag-beige",
    description: "Fly bag beige & brown",
    site: "Astore",
  },
  {
    image:
      "https://astore.pk/cdn/shop/files/13_15e5453b-a1c9-403c-90f4-9924fb652c60.jpg?v=1691421443&width=800",
    originalPrice: "pkr 8,000/-",
    price: 1759,
    discount: "-78% OFF",
    orderLink:
      "https://astore.pk/collections/handbags/products/swift-bag-peach",
    description: "Swift Bag Peach",
    site: "Astore",
  },
  {
    image:
      "https://astore.pk/cdn/shop/files/floweretmaron.jpg?v=1710488519&width=800",
    originalPrice: " pkr 4,000/-",
    price: 1649,
    discount: "-59% OFF",
    orderLink:
      "https://astore.pk/collections/handbags/products/floweret-bag-maroon",
    description: "Floweret Bag Maroon",
    site: "Astore",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428940-olive-green-tote-bag-front-gulahmed.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,690/-",
    price: 5018,
    discount: "-25% OFF",
    orderLink:
      "https://www.gulahmedshop.com/olive-green-tote-bag-ibs-ttb25-030",
    description: " Olive Green Tote Bag IBS-TTB25-030",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://astore.pk/cdn/shop/files/hiphopgreen.jpg?v=1710488734&width=600",
    originalPrice: "pkr 4,000/-",
    price: 1749,
    discount: "-56% OFF",
    orderLink:
      "https://astore.pk/collections/handbags/products/hip-hop-bag-green",
    description: "Hip Hop Bag Green.",
    site: "Astore",
  },

  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428962-black-hobo-bag-front-2-gulahmed.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,890/-",
    price: 4868,
    discount: "-25% OFF",
    orderLink: "https://www.gulahmedshop.com/black-hobo-bag-ibs-hbb25-003",
    description: " Black Hobo Bag IBS-HBB25-003",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://astore.pk/cdn/shop/files/stripbagbrown.jpg?v=1710490939&width=600",
    originalPrice: "pkr 3,500/-",
    price: 1600,
    discount: "-53% OFF",
    orderLink:
      "https://astore.pk/collections/handbags/products/brown-strip-bag",
    description: "Strip Bag Brown.",
    site: "Astore",
  },
  {
    image:
      "https://astore.pk/cdn/shop/files/beige1_dbd2f279-0271-409e-a427-2f1479b7cbee.jpg?v=1686822233&width=600",
    originalPrice: "pkr 3,500/-",
    price: 1999,
    discount: "-43% OFF",
    orderLink:
      "https://astore.pk/collections/set-of-2/products/beige-emerald-bag",
    description: "Emerald set of 2 Bag with pouch (Beige).",
    site: "Astore",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/1/418812_2_.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 1,690/-",
    price: 845,
    discount: "-50% OFF",
    orderLink: "https://www.gulahmedshop.com/green-wallet-iwb-wlt24-0016",
    description: " Green Wallet IWB-WLT24-0016",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/1/419774_6_.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 4,690/-",
    price: 3518,
    discount: "-25% OFF",
    orderLink: "https://www.gulahmedshop.com/black-bucket-iwb-bkb24-012",
    description: " Black Bucket IWB-BKB24-012",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://astore.pk/cdn/shop/products/brownstitchedemeraldsidewithpouch-min.jpg?v=1679048335&width=800",
    originalPrice: " pkr 4,000/-",
    price: 1999,
    discount: "-50% OFF",
    orderLink:
      "https://astore.pk/collections/handbags/products/brown-stitched-emerald-bag",
    description: "Emerald Bag with pouch (Brown)",
    site: "Astore",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428958-black-shoulder-bag-front-2-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,990/-",
    price: 5018,
    discount: "-25% OFF",
    orderLink: "https://www.gulahmedshop.com/black-shoulder-bag-ibs-shb25-023",
    description: " Black Shoulder Bag IBS-SHB25-023 (FEW LEFT)",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428965-beige-shoulder-bag-front-2-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 5,990/-",
    price: 4493,
    discount: "-25% OFF",
    orderLink:
      "https://www.gulahmedshop.com/beige-shoulder-bag-ibs-shb25-026#description",
    description: " Beige Shoulder Bag IBS-SHB25-026",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428937-black-tote-bag-front-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,690/-",
    price: 5018,
    discount: "-25% OFF",
    orderLink: "https://www.gulahmedshop.com/black-tote-bag-ibs-ttb25-027",
    description: " Black Tote Bag IBS-TTB25-027",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428941-blue-tote-bag-front-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,690/-",
    price: 5018,
    discount: "-25% OFF",
    orderLink: "https://www.gulahmedshop.com/blue-tote-bag-ibs-ttb25-031",
    description: "Blue Tote Bag IBS-TTB25-031",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428942-olive-green-shoulder-bag-side-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,490/-",
    price: 4868,
    discount: "-25% OFF",
    orderLink:
      "https://www.gulahmedshop.com/olive-green-shaoulder-bag-ibs-shb25-015",
    description: " Olive Green Shaoulder Bag IBS-SHB25-015",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/428948-pink-mini-bag-front-2-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 5,690/-",
    price: 4268,
    discount: "-25% OFF",
    orderLink: "https://www.gulahmedshop.com/pink-mini-bag-iww-mnb24-007",
    description: " Pink Mini Bag IWW-MNB24-007",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/427771-black-white-tote-bag-front-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 5,290/-",
    price: 3968,
    discount: "-25% OFF",
    orderLink:
      "https://www.gulahmedshop.com/black-white-tote-bag-ibs-ttb25-012",
    description: " Black White Tote Bag IBS-TTB25-012",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/427763-red-shoulder-bag-front-2-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 4,690/-",
    price: 3518,
    discount: "-25% OFF",
    orderLink: "https://www.gulahmedshop.com/red-shoulder-bag-ibs-shb25-013",
    description: "Red Shoulder Bag IBS-SHB25-013",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/1/416625_10__4_11zon.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 5,490/-",
    price: 2745,
    discount: "-50% OFF",
    orderLink: "https://www.gulahmedshop.com/beige-bucket-bag-iwb-bkb24-008",
    description: " Beige Bucket Bag IWB-BKB24-008",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/1/417921_5_.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,990/-",
    price: 3445,
    discount: "-50% OFF",
    orderLink:
      "https://www.gulahmedshop.com/mustard-yellow-shoulder-bag-iwb-shb24-67",
    description: "Mustard Yellow Shoulder Bag IWB-SHB24-67",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/1/417920_2_.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 6,690/-",
    price: 3445,
    discount: "-50% OFF",
    orderLink: " https://www.gulahmedshop.com/beige-shoulder-bag-iwb-shb24-66",
    description: " Beige Shoulder Bag IWB-SHB24-66",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://www.gulahmedshop.com/media/catalog/product/4/2/424501-brown-crossbody-wallet-front-ideas.jpg?optimize=low&fit=bounds&height=900&width=600",
    originalPrice: "pkr 4,290/-",
    price: 3218,
    discount: "-25% OFF",
    orderLink:
      "https://www.gulahmedshop.com/brown-cross-body-walletibs-cbw25-002",
    description: "Brown Cross Body WalletIBS-CBW25-002",
    site: "Gul Ahmed",
  },
  {
    image:
      "https://pursebazar.pk/cdn/shop/files/SheinMaroon.webp?v=1742564831&width=800",
    originalPrice: "pkr 4,499/-",
    price: 2199,
    discount: "-51% OFF",
    orderLink:
      "https://pursebazar.pk/collections/new-arrival/products/hijab-girl-red-canvas-tote-bag",
    description: "Hijab Girl Red Canvas Tote Bag",
    site: "Purse Bazar",
  },
  {
    image:
      "https://pursebazar.pk/cdn/shop/files/WhatsApp_Image_2025-04-04_at_4.35.37_PM.jpg?v=1745600426&width=800",
    originalPrice: "pkr 4,499/-",
    price: 2199,
    discount: "-51% OFF",
    orderLink:
      "https://pursebazar.pk/collections/new-arrival/products/hijab-girl-dark-brown-canvas-tote-bag",
    description: "Hijab Girl Dark Brown Canvas Tote Bag",
    site: "Purse Bazar",
  },
  {
    image:
      "https://pursebazar.pk/cdn/shop/files/1_9e376858-9f82-429c-9600-bb5b1e4e36a0.png?v=1753424333&width=800",
    originalPrice: "pkr 4,499/-",
    price: 2299,
    discount: "-49% OFF",
    orderLink:
      "https://pursebazar.pk/collections/new-arrival/products/blossom-canvas-tote-bag",
    description: "Blossom Canvas Tote Bag",
    site: "Pusrse Bazar",
  },
  {
    image:
      "https://pursebazar.pk/cdn/shop/files/IMG_6855.jpg?v=1691738261&width=800",
    originalPrice: "pkr 3,799/-",
    price: 2199,
    discount: "-42% OFF",
    orderLink:
      "https://pursebazar.pk/collections/new-arrival/products/classy-2-pcs-blue-shoulder-bag",
    description: "Classy 2 Pcs Blue Shoulder Bag",
    site: "Purse Bazar",
  },
  {
    image:
      "https://pursebazar.pk/cdn/shop/files/IMG_6901.jpg?v=1692102983&width=800",
    originalPrice: "pkr 4,699/-",
    price: 2399,
    discount: "-49% OFF",
    orderLink:
      "https://pursebazar.pk/collections/new-arrival/products/molten-caramel-shoulder-bag",
    description: "Molten Caramel Shoulder Bag",
    site: "Purse Bazar",
  },
  {
    image:
      "https://baguci.com/cdn/shop/files/DSC03880.jpg?v=1728907092&width=600",
    originalPrice: "pkr 3,470/-",
    price: 2399,
    discount: "-31% OFF",
    orderLink:
      "https://baguci.com/collections/cross-body-bags/products/tea-green-floral-bag",
    description: "Tea Green Floral Bag",
    site: "Baguci",
  },
  {
    image:
      "https://baguci.com/cdn/shop/files/4_ab72f6b3-dcbc-474d-b085-ffd50b0ac7d2.jpg?v=1736250605&width=600",
    originalPrice: "pkr 3,600/-",
    price: 2499,
    discount: "-31% OFF",
    orderLink:
      "https://baguci.com/collections/cross-body-bags/products/olive-green-double-handle-boxy-bag?variant=48410196214068",
    description: "Olive Green Double Handle Boxy Bag",
    site: "Baguci",
  },
  {
    image:
      "https://baguci.com/cdn/shop/files/4_e7357c45-7358-499d-9781-6e08842ff37b.jpg?v=1736250821&width=600",
    originalPrice: "pkr 3,600/-",
    price: 2499,
    discount: "-31% OFF",
    orderLink:
      "https://baguci.com/collections/cross-body-bags/products/black-double-handle-boxy-bag?variant=48410195263796",
    description: "Black Double Handle Boxy Bag",
    site: "Baguci",
  },
  {
    image:
      "https://baguci.com/cdn/shop/files/4_0a695a29-752b-4180-b731-a79435575246.jpg?v=1716476102&width=600",
    originalPrice: "pkr 2,460/-",
    price: 1699,
    discount: "-31% OFF",
    orderLink:
      "https://baguci.com/collections/cross-body-bags/products/mustard-glory-twist-lock-bag?variant=47982582825268",
    description: "Mustard Glory Twist Lock Bag",
    site: "Baguci",
  },
  {
    image:
      "https://baguci.com/cdn/shop/files/3G8A4682_70d6093f-edb7-481a-9b1e-dcc15b66b661.jpg?v=1716473786&width=600",
    originalPrice: 2880,
    price: 2199,
    discount: "-24% OFF",
    orderLink:
      "https://baguci.com/collections/cross-body-bags/products/maroon-evening-bag?variant=47982524268852",
    description: "Maroon Evening Bag",
    site: "Baguci",
  },
  {
    image:
      "https://baguci.com/cdn/shop/files/4_1717f925-5303-44c4-8be9-69870915345a.jpg?v=1716468544&width=600",
    originalPrice: 3330,
    price: "pkr 2,299/-",
    discount: "-31% OFF",
    orderLink:
      "https://baguci.com/collections/cross-body-bags/products/maroon-bubbly-bag?variant=47982361936180",
    description: "Maroon Bubbly Bag",
    site: "Baguci",
  },
  {
    image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw9e846c8a/images/13May25/000000HB1661_3.JPG?sw=1000&sh=1200",
    originalPrice: "pkr 3,990/-",
    price: 1995,
    discount: "-50% OFF",
    orderLink: "https://pk.sapphireonline.pk/collections/bags/products/000000HB1661.html",
    description: "Silver Mini Bag",
    site: "Sapphire",
  },
  {
    image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw578809f2/images/13May25/000000HB1659_3.JPG?sw=1000&sh=1200",
    originalPrice: "pkr 4,990/-",
    price: 2495,
    discount: "-50% OFF",
    orderLink: "https://pk.sapphireonline.pk/collections/bags/products/000000HB1659.html",
    description: "Tan Top Handle Bag",
    site: "Sapphire",
  },
  {
    image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw0e23ae4f/images/24April25/000000HB1641_3.JPG?sw=1000&sh=1200",
    originalPrice: "pkr 5,290/-",
    price: 2645,
    discount: "-50% OFF",
    orderLink: "https://pk.sapphireonline.pk/collections/bags/products/000000HB1641.html",
    description: "Off White Tote Bag",
    site: "Sapphire",
  },
  {
    image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dwf415aee1/images/13May25/000000HB1652_3.JPG?sw=1000&sh=1200",
    originalPrice: "pkr 4,290/-",
    price: 2145,
    discount: "-50% OFF",
    orderLink: "https://pk.sapphireonline.pk/collections/bags/products/000000HB1652.html",
    description: "Brown Crossbody Bag",
    site: "Sapphire",
  },
  {
    image: "https://spunkymart.pk/cdn/shop/files/women-handy-bags.jpg?v=1730453721",  
    originalPrice: "pkr 2,900/-",
    price: 2200,
    discount: "-24% OFF",
    orderLink: "https://spunkymart.pk/products/graphic-tote-bag-purse-with-top-handle-shoulder-bag",
    description: "Graphic Tote Bag Purse with Top Handle Shoulder Bag",
    site: "Spunkymart",
  },
  {
    image: "https://spunkymart.pk/cdn/shop/files/women-leather-hand-bags.jpg?v=1719496949",
    originalPrice: "pkr 3,800/-",
    price: 2999,
    discount: "-21% OFF",
    orderLink: "https://spunkymart.pk/products/ladies-shoulder-bag-metal-chain-soft-leather-purses-women-diagonal-bag",
    description: "Ladies Shoulder Bag Metal Chain Soft Leather Purses Women Diagonal Bag",
    site: "Spunkymart",
  },
  {
    image: "https://spunkymart.pk/cdn/shop/files/Women-Gucci-Bag.png?v=1701166507",
    originalPrice: "pkr 3,500/-",
    price: 1999,
    discount: "-42% OFF",
    orderLink: "https://spunkymart.pk/products/women-leather-belt-style-bag-front-pocket-functional-handbag",
    description: "GU Women Leather Belt Style Bag Front Pocket Functional Handbag",
    site: "Spunkymart",
  },
  {
    image: "https://spunkymart.pk/cdn/shop/files/Ysl-cro-patten-bag.png?v=1704278071",
    originalPrice: "pkr 2,900/-",
    price: 2200,
    discount: "-24% OFF",
    orderLink: "https://spunkymart.pk/products/crocodile-flap-open-leather-chain-shoulder-bag",
    description: "SL Crocodile Flap Open Leather Chain Shoulder Bag #YL-667",
    site: "",
  },
  {
    image: "https://spunkymart.pk/cdn/shop/files/bow-style-every-day-handbag.jpg?v=1715858477",
    originalPrice: "pkr 3,200/-",
    price: 1600,
    discount: "-50% OFF",
    orderLink: "https://spunkymart.pk/products/stylish-design-ladies-handbag-with-modern-clutch-wallet",
    description: "Brown Stylish Design Ladies Handbag with Modern Clutch Wallet CK-676",
    site: "Spunkymart",
  },
  {
    image: "https://spunkymart.pk/cdn/shop/files/Glitter-fancy-clutch.jpg?v=1704369863",
    originalPrice: "pkr 2,000/-",
    price: 1400,
    discount: "-30% OFF",
    orderLink: "https://spunkymart.pk/products/glitter-clutch-bag-women-evening-formal-purse",
    description: "Glitter Clutch Bag Women Evening Formal Purse",
    site: "Spunkymart",
  },
  // {
  //   image: "",
  //   originalPrice: "pkr /-",
  //   price: ,
  //   discount: "-%",
  //   orderLink: "",
  //   description: "",
  //   site: "",
  // },
  // {
  //   image: "",
  //   originalPrice: "pkr /-",
  //   price: ,
  //   discount: "-%",
  //   orderLink: "",
  //   description: "",
  //   site: "",
  // },
  // {
  //   image: "",
  //   originalPrice: "pkr /-",
  //   price: ,
  //   discount: "-%",
  //   orderLink: "",
  //   description: "",
  //   site: "",
  // },
  // {
  //   image: "",
  //   originalPrice: "pkr /-",
  //   price:,
  //   discount: "-%",
  //   orderLink: "",
  //   description: "",
  //   site: "",
  // },
];

// Populate gallery
bags.forEach((bag, index) => {
  const item = document.createElement("div");
  item.classList.add("gallery-item");
  item.innerHTML = `
        <a href="#">
        <img src="${bag.image}" alt="bag" data-index="${index}"
        onerror="this.onerror=null; this.src='/images/Doc-P-303-638240681369208725.png';">
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
function displayProducts(filteredProducts) {
  visible.innerHTML = "";
  if (filteredProducts.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  filteredProducts.forEach((bag) => {
    const originalIndex = bags.indexOf(bag);
    const search = document.createElement("div");
    search.classList.add("gallery-item");
    search.innerHTML = `<a href="#">
        <img src="${bag.image}" alt="bag" data-index="${originalIndex}"
        onerror="this.onerror=null; this.src='/images/Doc-P-303-638240681369208725.png';">
        </a>
        <span class="discount-tag">${bag.discount}</span>
        <div class="product-description">${bag.description} <span>(${bag.site})</span></div>
        <div class="overlay">
        <div class="original"><span>${bag.originalPrice}</span></div>
            <button class="order-btn" onclick="window.location.href="#">${bag.price}</button>
            <button class="like-btn" data-index="${originalIndex}">♡</button>
        </div>
      
    `;
    visible.appendChild(search);
  });
}
// Initialize Fuse.js
const options = {
  keys: ["description", "site"],
  includeScore: true,
  threshold: 0.3,
};

const fuse = new Fuse(bags, options);

function filterProducts() {
  const query = searchInput.value.trim();
  if (!query) {
    displayProducts(bags);
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
