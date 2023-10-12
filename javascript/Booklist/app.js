const $ = document;
const bookTitle = $.querySelector("#title");
const bookAuthor = $.querySelector("#author");
const bookYear = $.querySelector("#year");
const btn = $.querySelector(".btn");
const bookList = $.querySelector("#book-list")
let allBooks = [];

function addBook(event) {
  event.preventDefault();
  let book = {
    id: allBooks.length + 1,
    title: bookTitle.value,
    author: bookAuthor.value,
    year: bookYear.value,
  };
  allBooks.push(book);
  if (bookTitle.value !== "") {
    bookGenerator(allBooks);
    getLocalStorage(allBooks);
  }
}

function bookGenerator(books) {
  let tableRow, title, author, year;
  bookList.innerHTML = ""
  books.forEach(function (book) {
    tableRow = $.createElement("tr")
    title = $.createElement("td")
    author = $.createElement("td")
    year = $.createElement("td")
    title.innerHTML = book.title
    author.innerHTML = book.author
    year.innerHTML = book.year
    tableRow.append(title,author,year)
    bookList.appendChild(tableRow) 
  });
}

btn.addEventListener("click", addBook);
