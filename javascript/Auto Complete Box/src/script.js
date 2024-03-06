const searchBox = document.querySelector(".search-input");
const inputElem = document.querySelector("input")
const suggestedBox = document.querySelector(".autocom-box");

searchBox.addEventListener("keyup", function () {
  const inputValue = inputElem.value

  if (inputValue) {
    searchBox.classList.add("active")
    let mainWords = suggestions.filter(function (word) {
      return word.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    })
    
    suggestionGenerator(mainWords)
  } else {
    searchBox.classList.remove("active")
  }
});

function suggestionGenerator (wordsArray) {
  suggestedBox.innerHTML = ''
  let listItemsArray = wordsArray.map(function (word) {
    return '<li>' + word + '</li>'
  })

  let customListItem;
  if (!listItemsArray.length) {
    customListItem = '<li>' + inputElem.value + '</li>'
  } else {
    customListItem = listItemsArray.join('')
  } 
  suggestedBox.insertAdjacentHTML("beforeend", customListItem)
  select()
}

function select () {
  let suggestions = document.querySelectorAll('li')
  suggestions.forEach(function (suggestion) {
    suggestion.addEventListener("click", function (event) {
      inputElem.value = event.target.textContent
      searchBox.classList.remove("active")
    })
  })
}
