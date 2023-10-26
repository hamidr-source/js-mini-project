const productsData = [
  {
    id: 1,
    title: "Album 1",
    price: 12.93,
    img: "Images/Album 1.png",
    count: 1,
  },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png", count: 1 },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png", count: 1 },
  {
    id: 4,
    title: "Album 4",
    price: 41.98,
    img: "Images/Album 4.png",
    count: 1,
  },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png", count: 1 },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png", count: 1 },
];

const shopCardsContainer = document.querySelector(".shop-items");
const userBasketCard = document.querySelector(".cart-items");
const totalPriceElem = document.querySelector(".cart-total-price")

let userBasket = [];

const productFragment = document.createDocumentFragment();

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
    addProductToBasket(product.id);
  });
  addProductToBasketBtn.innerHTML = "ADD TO CART";
  addProductToBasketBtn.className = "btn btn-primary shop-item-button";
  productDetails.append(productPrice, addProductToBasketBtn);
  productCard.append(productTitle, productImage, productDetails);
  productFragment.append(productCard)
});

shopCardsContainer.appendChild(productFragment)

function addProductToBasket(productId) {
  let mainProduct = productsData.find(function (product) {
    return product.id === productId;
  });
  userBasket.push(mainProduct);
  userBasketCardGenerator(userBasket);
  setLocalStorage(userBasket);
  totalPriceCalc(userBasket)
}

function setLocalStorage(userBasket) {
  localStorage.setItem("userBasket", JSON.stringify(userBasket));
}

function getLocalStorage() {
  const localStorageValue = JSON.parse(localStorage.getItem("userBasket"));
  if (localStorageValue) {
    userBasket = localStorageValue;
  } else {
    userBasket = [];
  }
  userBasketCardGenerator(userBasket);
}

function userBasketCardGenerator(products) {
  userBasketCard.innerHTML = "";
  products.forEach(function (product) {
    const cardDetail = document.createElement("div");
    cardDetail.className = "cart-item cart-column";
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", product.img);
    cardImage.classList.add("cart-item-image");
    const cardTitle = document.createElement("span");
    cardTitle.classList.add("cart-item-title");
    cardTitle.innerHTML = product.title;
    const cardPrice = document.createElement("span");
    cardPrice.className = "cart-price cart-column";
    cardPrice.innerHTML = "$" + product.price;
    const cardQuantity = document.createElement("div");
    cardQuantity.className = "cart-quantity cart-column";
    const quantityInput = document.createElement("input");
    quantityInput.classList.add("cart-quantity-input");
    quantityInput.type = "number";
    quantityInput.value = product.count;
    quantityInput.addEventListener("change", function() {
      updateCountHandler(product.id, quantityInput.value)
    })
    const removeCardBtn = document.createElement("button");
    removeCardBtn.className = "btn btn-danger";
    removeCardBtn.type = "button";
    removeCardBtn.innerHTML = "REMOVE";
    removeCardBtn.addEventListener("click", function () {
      removeProductHandler(product.id);
    });

    cardDetail.append(cardImage, cardTitle);
    cardQuantity.append(quantityInput, removeCardBtn);

    const cardRowItem = document.createElement("div");
    cardRowItem.classList.add("cart-row");
    cardRowItem.append(cardDetail, cardPrice, cardQuantity);
    userBasketCard.appendChild(cardRowItem);
  });
}

function removeProductHandler(productId) {
  let localStorageValue = JSON.parse(localStorage.getItem("userBasket"));
  userBasket = localStorageValue;
  let productIndex = userBasket.findIndex(function (product) {
    return product.id === productId;
  });
  userBasket.splice(productIndex, 1);
  userBasketCardGenerator(userBasket);
  totalPriceCalc(userBasket)
  setLocalStorage(userBasket);
}

function totalPriceCalc (userBasket) {
  let sum = 0
  userBasket.forEach(function (product) {
    sum += Math.round(product.price * product.count)
  })

  totalPriceElem.innerHTML = "$" + sum 
}

function updateCountHandler (productId, newCount) {
  userBasket.forEach(function (product) {
    if(productId === product.id) {
      product.count = newCount
    }
    totalPriceCalc(userBasket)
  })
}

window.addEventListener("load", getLocalStorage);
