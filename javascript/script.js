let userNumber = Number(prompt("please enter a number!"));
let counter = 0;

for (let index = 0; userNumber / 10 != 0; index++) {
  counter++;

  userNumber = Math.floor(userNumber / 10);
}

console.log(counter);
