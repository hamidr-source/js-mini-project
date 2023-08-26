let userFirstNumber = Number(prompt("enter your first number"))
let userSecondNumber = Number(prompt("enter your second number"))

if (userFirstNumber % 2  === 0 ) {
    while(userFirstNumber < userSecondNumber){
        console.log(userFirstNumber)
        userFirstNumber += 2
    }
} else {
    userFirstNumber++
    while(userFirstNumber < userSecondNumber){
        console.log(userFirstNumber)
        userFirstNumber += 2
    }
}