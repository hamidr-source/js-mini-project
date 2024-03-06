const backBtn = document.querySelector(".back-btn");
const shoesTitle = document.querySelector(".shoes-title");
const shoesDesc = document.querySelector(".shoes-description");
const shoesImage = document.querySelector("img");

const productsData = [
  { id: 1, title: "Sport Shoes", price: 35, img: "images/1.png" },
  { id: 2, title: "Women Shoes", price: 55, img: "images/2.png" },
  { id: 3, title: "Men Shoes", price: 22, img: "images/3.png" },
];

const locationParams = new URLSearchParams(location.search);
const productID = locationParams.get("id");

let mainProduct = productsData.find(function (product) {
  return product.id === Number(productID);
});

if (mainProduct) {
    shoesTitle.innerHTML = mainProduct.title

    shoesImage.setAttribute("src", mainProduct.img)
} else {
    location.href = "http://127.0.0.1:5500/Dynamic%20Shoes%20Store/"
}

backBtn.addEventListener("click", function () {
  history.back();
});
