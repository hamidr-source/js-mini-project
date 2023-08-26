let userNumber = Number(prompt("please enter a number!"));
let counter = 0
let sum = 0
while ( userNumber % 10 != 0 ) {
    sum = sum + (userNumber % 10)

    counter++


    userNumber = Math.floor(userNumber / 10)
}

console.log(`your number is ${counter} , your sum is ${sum}`)