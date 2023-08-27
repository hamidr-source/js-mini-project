let userFirstNumber = Number(prompt("Please enter first number : "));
let userSecondNumber = Number(prompt("Please enter second number : "));
let operations = prompt("Please enter your operation : \n + \n - \n * \n / \n **");

switch (operations) {
  case "+":
    alert(userFirstNumber + userSecondNumber)
  case "-": 
    alert(userFirstNumber - userSecondNumber)
  case "*":  
    alert(userFirstNumber * userSecondNumber)
  case "/":
    alert(userFirstNumber / userSecondNumber)
  case "**":
    alert(userFirstNumber ** userSecondNumber)
    break;

  default: 
    alert("Please enter current operation!!!")
    break;
}