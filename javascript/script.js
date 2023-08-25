let userNumber = null
let sum = 0

for(let i = 0 ; i <= 5 ; i++ ) {
    userNumber = Number(prompt("enter "+ (i + 1) +" number"))

    sum = sum + userNumber
}
console.log((sum/ 5))