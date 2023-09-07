const $ = document;

const noteInput = $.querySelector('.note-input')
const addBtn = $.querySelector(".add-btn")
const noteContainer = $.querySelector(".container")

addBtn.addEventListener("click", addBtnHandler)

function addBtnHandler (event) {
  event.preventDefault()

  let inputValue = noteInput.value
  if (inputValue !== "") {
    const newDiv = $.createElement('div')
    newDiv.classList.add("note")
  }
}