let userFirstNumber = Number(prompt("Please enter a number")) 
let userSecondNumber = Number(prompt("Please enter a number"))
let sum = 1
for (let index = 0; index < userSecondNumber; index++) {
    sum *= userFirstNumber
}
console.log(sum)