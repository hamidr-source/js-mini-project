let sum = 0

// User basket shop
const userBasket = [
  { id: 1, name: "Phone", price: 90 },
  { id: 2, name: "Laptop", price: 1000 },
  { id: 3, name: "Pen", price: 90 },
  { id: 4, name: "Pencil", price: 90 },
  { id: 5, name: "Jacket", price: 120 },
  { id: 5, name: "Milk", price: 90 },
];

// find products price grater than 100
let filterProducts = userBasket.filter(function (product) {
  return product.price < 100;
});

// Calc the price of post
let postProducts = filterProducts.length * 10;


// Test postProducts variable
console.log(postProducts)

// All prices
userBasket.map(function (product) {
  let allPrice = postProducts + product.price;
  sum = sum + allPrice
});

// Result
console.log(sum);


