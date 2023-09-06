const usernameInput = document.querySelector(".username");
let counter = document.querySelector(".counter");

usernameInput.addEventListener("keydown", keyDownHandler);

function keyDownHandler() {
  counter.innerHTML = 19 - usernameInput.value.length;
}
