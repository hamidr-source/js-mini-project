const contextMenu = document.querySelector(".context-menu");

document.body.addEventListener("contextmenu", contextHandler);
document.body.addEventListener("click", clickHandler);
document.body.addEventListener("keydown", keyHandler);

function contextHandler(event) {
  event.preventDefault();

  if ((contextMenu.style.display = "none")) {
    contextMenu.style.display = "block";
    contextMenu.style.left = event.pageX + "px";
    contextMenu.style.top = event.pageY + "px";
  }
}

function clickHandler() {
  contextMenu.style.display = "none";
}

function keyHandler(event) {
  if (event.key === "Escape") {
    contextMenu.style.display = "none";
  }
}
