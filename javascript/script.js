let userFirstNumber = Number(prompt("enter your first number"))
let userSecondNumber = Number(prompt("enter your second number"))
let counter = 0
for (let index = userFirstNumber; index < userSecondNumber; index++) {
    counter = index++
    if (counter % 2 == 0){
        console.log(counter)
    }
}