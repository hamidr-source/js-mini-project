var userNumber = Number(prompt("please enter a number!"));
var sum = 0;

for (let index = 0; Math.floor(userNumber / 10 != 0); index++) {
  sum = sum + (userNumber % 10);

  userNumber = Math.floor(userNumber / 10);
}

console.log("sum is ", sum)
