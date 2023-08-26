const product = [
  { id: 1, name: "laptop", price: 1000 },
  { id: 2, name: "Mobile", price: 400 },
  { id: 3, name: "Tablet", price: 800 },
  { id: 4, name: "Pen", price: 2 },
  { id: 5, name: "Pencil", price: 1.5 },
  { id: 5, name: "Phone", price: 300 },
];

const userBasket = [
  { id: 1, name: "Pen", price: 2 },
  { id: 2, name: "Pencil", price: 1.5 },
];

let productName = String(prompt("Please enter name of your product. "));
let requestProduct;

let isValid = product.some(function (product) {
  if (product.name === productName) {
    requestProduct = product;
    return true;
  }
});

if (isValid === true) {
  let newProduct = {
    id: 3,
    name: requestProduct.name,
    price: requestProduct.price,
  };
  userBasket.push(newProduct);
  let sum = 0;
  userBasket.forEach(function (product) {
    console.log(product);
    sum = sum + product.price;
    console.log(sum);
  });
} else {
  alert("Is not valid");
}
