const productsContainer = document.querySelector(".container");

const productsData = [
  { id: 1, title: "Sport Shoes", price: 35, img: "images/1.png" },
  { id: 2, title: "Women Shoes", price: 55, img: "images/2.png" },
  { id: 3, title: "Men Shoes", price: 22, img: "images/3.png" },
];

productsData.forEach(function (product) {
  productsContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="product-card"><h1>' +
      product.title +
      '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url(' +
      product.img +
      ');"></div><div class="product-info"><div class="product-price">$' +
      product.price +
      '</div><a href="product.html?id=' +
      product.id +
      '" class="product-button">See More</a></div></div>'
  );
});
