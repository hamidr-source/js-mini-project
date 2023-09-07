const $ = document;

const noteInput = $.querySelector(".note-input");
const alertDiv = $.querySelector(".alert");
const addBtn = $.querySelector(".add-btn");
const noteList = $.querySelector(".note-list");

noteInput.addEventListener("keypress", counterHandler);
addBtn.addEventListener("click", addBtnHandler);

function counterHandler() {
  if (noteInput.value.length >= 70) {
    alertDiv.style.display = "block";
    alertDiv.innerHTML = "You can't enter more than 75 words";
    alertDiv.style.backgroundColor = "#7B84FC";
  }
}

function addBtnHandler(event) {
  event.preventDefault();

  let inputValue = noteInput.value;
  if (inputValue !== "") {
    const newDiv = $.createElement("div");
    newDiv.classList.add("note");
    noteList.appendChild(newDiv);
    const liItem = $.createElement("li");
    newDiv.appendChild(liItem);
    liItem.classList.add("note-item");
    liItem.innerHTML = inputValue;
    const trashBtn = $.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<span class="fas fa-multiply"></span>';
    newDiv.appendChild(trashBtn);
    alertDiv.style.display = "block";
    alertDiv.innerHTML = "Note added !";
    alertDiv.style.backgroundColor = "rgb(24, 168, 4)";

    noteInput.value = "";
  } else {
    alertDiv.style.display = "block";
    alertDiv.innerHTML = "Please enter a note";
    alertDiv.style.backgroundColor = "rgb(223, 28, 28)";
  }


}
setInterval(function () {
  alertDiv.style.display = "none";
}, 3500);