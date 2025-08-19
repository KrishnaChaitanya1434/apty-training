const resultsDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
const ele = document.getElementById("result-header");

let activeIntervals = [];

function clearAllIntervals() {
  activeIntervals.forEach((id) => clearInterval(id));
  activeIntervals = [];
}

function createImageCarousel(imgElement, images, dots) {
  let index = 0;
  const intervalId = setInterval(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }, 3000);

  activeIntervals.push(intervalId);
}

// Render multiple products
function renderProducts(products) {
  clearAllIntervals();

  resultsDiv.innerHTML = "";
  resultsDiv.className = "result";
  errorDiv.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = product.images[0];
    img.alt = product.title;

    if (product.images.length > 1) {
      const dotsContainer = document.createElement("div");
      dotsContainer.className = "dots";

      const dots = product.images.map((_, i) => {
        const dot = document.createElement("span");
        dot.className = "dot" + (i === 0 ? " active" : "");
        dotsContainer.appendChild(dot);
        return dot;
      });

      card.appendChild(img);
      card.appendChild(dotsContainer);

      // safe interval
      createImageCarousel(img, product.images, dots);
    } else {
      card.appendChild(img);
    }

    // Title
    const title = document.createElement("h3");
    title.textContent = product.title;

    // Price
    const price = document.createElement("p");
    price.innerHTML = `<strong>$${product.price}</strong>`;

    card.appendChild(title);
    card.appendChild(price);

    resultsDiv.appendChild(card);
  });
}

// Render single product
function renderSingleProduct(product) {
  clearAllIntervals();

  resultsDiv.innerHTML = "";
  resultsDiv.className = "result single-result";
  errorDiv.textContent = "";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.images[0];
  img.alt = product.title;

  if (product.images.length > 1) {
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots";

    const dots = product.images.map((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dotsContainer.appendChild(dot);
      return dot;
    });

    card.appendChild(img);
    card.appendChild(dotsContainer);

    createImageCarousel(img, product.images, dots);
  } else {
    card.appendChild(img);
  }

  // Details
  const content = document.createElement("div");
  content.innerHTML = `
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Category:</strong> ${product.category}</p>
  `;

  card.appendChild(content);
  resultsDiv.appendChild(card);
}

// Fetch helper
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("API Request Failed!");
    return await response.json();
  } catch (error) {
    errorDiv.textContent = error.message;
    resultsDiv.innerHTML = "";
    return null;
  }
}

// Search by name
async function searchProducts() {
  clearAllIntervals();
  const query = document.getElementById("searchInput").value.trim();
  if (!query) {
    errorDiv.textContent = "Please enter a product name.";
    return;
  }
  const response = await fetchData(
    `https://dummyjson.com/products/search?q=${query}`
  );
  if (response && response.products.length > 0) {
    ele.textContent = "";
    const resHead = document.createElement("h2");
    resHead.innerHTML = `Found ${response.products.length} items with title: ${query}<br><br>`;
    ele.appendChild(resHead);
    renderProducts(response.products);
  } else {
    errorDiv.textContent = "No Products Found!";
  }
}

// Search by ID
async function getProduct() {
  clearAllIntervals();
  ele.textContent = "";
  const id = document.getElementById("productIDInput").value.trim();
  if (!id) {
    errorDiv.textContent = "Enter an ID to get the product.";
    return;
  }
  const product = await fetchData(`https://dummyjson.com/products/${id}`);
  if (product) renderSingleProduct(product);
}

// Get All Products
async function getAllProducts() {
  clearAllIntervals();
  ele.textContent = "";
  const response = await fetchData(
    "https://dummyjson.com/products?limit=30&skip=90"
  );
  if (response && response.products) {
    renderProducts(response.products);
  }
}

function goBack() {
  getAllProducts();
  document.getElementById("searchInput").value = "";
  document.getElementById("productIDInput").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  getAllProducts();
});
