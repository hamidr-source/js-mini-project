const searchBox = document.querySelector(".search-input");
const inputElem = document.querySelector("input")
const suggestedBox = document.querySelector(".autocom-box");

searchBox.addEventListener("keyup", function () {
  const inputValue = inputElem.value

  if (inputValue) {
    searchBox.classList.add("active")
    let mainWord = suggestions.filter(function (word) {
      return word.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    })

  } else {
    searchBox.classList.remove("active")
  }
});
