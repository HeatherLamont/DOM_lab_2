document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js:', data);

  const productsSection = document.querySelector("#products");
  
data.products.forEach(product => {
  console.log(product.name);
  let productsList = document.createElement("ul");
  productsList.classList.add("product")
  productsSection.appendChild(productsList);

  const listingName = document.createElement("li");
  listingName.textContent = product.name;
  productsList.appendChild(listingName);

  const listingDescription = document.createElement("li");
  listingDescription.textContent = product.description;
  productsList.appendChild(listingDescription);

  const listingPrice = document.createElement("li");
  listingPrice.textContent = product.price;
  productsList.appendChild(listingPrice);
})


})
