let minuteUserEntry = Number(prompt("Minute"));
let secondUserEntry = Number(prompt("second"));

let result = setInterval(function () {

  if (secondUserEntry == -1){
    minuteUserEntry--
    secondUserEntry = 59
  }

  if (minuteUserEntry < 10 && minuteUserEntry[0] !== "0") {
    minuteUserEntry = "0" + minuteUserEntry;
  }

  if (secondUserEntry < 10 && secondUserEntry[0] !== "0") {
    secondUserEntry = "0" + secondUserEntry;
  }

  if (secondUserEntry == 0 && minuteUserEntry == 0){
    clearInterval(result)
  }
  let timer = minuteUserEntry + ":" + secondUserEntry;
  secondUserEntry--;
  console.log(timer);
}, 1000);
