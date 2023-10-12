const $ = document;
const bookTitle = $.querySelector("#title");
const bookAuthor = $.querySelector("#author");
const bookYear = $.querySelector("#year");
const btn = $.querySelector(".btn");
let allBooks = [];

function addBook() {
  let book = {
    id:     allBooks.length + 1,
    title:  bookTitle.value,
    author: bookAuthor.value,
    year:   bookYear.value,
  };
  allBooks.push(book)
  if (bookTitle.value !== "") {
    bookGenerator(allBooks)
    getLocalStorage(allBooks)
  } 
}

btn.addEventListener("click", addBook);
