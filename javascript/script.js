const $ = document;

const noteInput = $.querySelector(".note-input");
const alertDiv = $.querySelector(".alert");
const addBtn = $.querySelector(".add-btn");
const deleteBtn = $.querySelector(".delete-btn");
const noteList = $.querySelector(".note-list");
const colors = $.querySelectorAll(".color-box")

noteInput.addEventListener("keypress", alertHandler);
addBtn.addEventListener("click", addNoteHandler);
deleteBtn.addEventListener("click", deleteValueHandler);
noteList.addEventListener("click", deleteNoteHandler)

colors.forEach(function (color) {
  color.addEventListener("click", function () {
    noteInput.style.backgroundColor = color.style.backgroundColor
  })
})

function alertHandler() {
  if (noteInput.value.length >= 70) {
    alertDiv.style.display = "block";
    alertDiv.innerHTML = "You can't enter more than 75 words";
    alertDiv.style.backgroundColor = "#7B84FC";
  }
}

function deleteValueHandler() {
  noteInput.value = "";
  noteInput.style.backgroundColor = "white"
}

function addNoteHandler(event) {
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
    newDiv.style.backgroundColor = noteInput.style.backgroundColor 
    noteInput.style.backgroundColor = "white"
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
    noteInput.style.backgroundColor = "white"
  }
}

function deleteNoteHandler (event) {
  if (event.target.classList.value === "trash-btn") {
    event.target.parentElement.remove()
    alertDiv.style.display = "block";
    alertDiv.innerHTML = "Note deleted !";
    alertDiv.style.backgroundColor = "#7B84FC";
  }
}

setInterval(function () {
  alertDiv.style.display = "none";
}, 3500);
