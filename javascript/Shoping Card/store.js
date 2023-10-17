const productsData = [
  { id: 1, title: "Album 1", price: 12.93, img: "Images/Album 1.png" },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png" },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png" },
  { id: 4, title: "Album 4", price: 41.98, img: "Images/Album 4.png" },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png" },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png" },
];

const shopCardsContainer = document.querySelector(".shop-items");

let userBasket = [];

productsData.forEach(function (product) {
  const productCard = document.createElement("div");
  productCard.classList.add("shop-item");
  const productImage = document.createElement("img");
  productImage.classList.add("shop-item-image");
  productImage.setAttribute("src", product.img);
  const productTitle = document.createElement("span");
  productTitle.classList.add("shop-item-title");
  productTitle.innerHTML = product.title;
  const productPrice = document.createElement("span");
  productPrice.classList.add("shop-item-price");
  productPrice.innerHTML = product.price + " $";
  const productDetails = document.createElement("div");
  productDetails.classList.add("shop-item-details");
  const addProductToBasketBtn = document.createElement("button");
  addProductToBasketBtn.addEventListener("click", function () {
    addProductToBasket(product.id)
  })
  addProductToBasketBtn.innerHTML = "ADD TO CART";
  addProductToBasketBtn.className = "btn btn-primary shop-item-button";
  productDetails.append(productPrice, addProductToBasketBtn);
  productCard.append(productTitle, productImage, productDetails);
  shopCardsContainer.appendChild(productCard);
});

function addProductToBasket (productId) {
    let mainProduct = productsData.find(function (product) {
        return product.id === productId
    })
    userBasket.push(mainProduct)
    userBasketGenerator(userBasket)
}
