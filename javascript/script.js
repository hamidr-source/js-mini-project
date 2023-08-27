let userMinuteEntry = Number(prompt("Enter Minute"));
let userSecondEntry = Number(prompt("Enter second"));

let timer = setInterval(function () {
  if (userSecondEntry === -1 ) {
    userMinuteEntry--;
    userSecondEntry = 59;
  } else if (userMinuteEntry === 0 && userSecondEntry === 0) {
    clearInterval(timer);
  }
  console.log(userMinuteEntry + ":" + userSecondEntry);
  userSecondEntry--;
}, 1000);
