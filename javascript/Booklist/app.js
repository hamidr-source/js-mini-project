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
    inventory: true
  };
  allBooks.push(book);
  if (bookTitle.value !== "") {
    bookGenerator(allBooks);
    setLocalStorage(allBooks);
  }
  bookTitle.value = ""
  bookAuthor.value = ""
  bookYear.value = ""
}

function setLocalStorage (books) {
    localStorage.setItem("books", JSON.stringify(books))
}

function bookGenerator(books) {
  let tableRow, title, author, year;
  bookList.innerHTML = ""
  books.forEach(function (book) {
    tableRow = $.createElement("tr")
    tableRow.setAttribute("onclick", "endInventory(" + book.id + ")")
    if (!book.inventory) {
        tableRow.style.cssText = "text-decoration: line-through ; opacity: 0.6 ;"
    } else {
        tableRow.style.cssText = "text-decoration: none ; opacity: 1 ;"
    }
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

function endInventory (bookId) {
    let getBook = JSON.parse(localStorage.getItem("books"))
    allBooks = getBook
    allBooks.forEach(function (book) {
        if (bookId === book.id) {
            book.inventory = !book.inventory
        }
    })
    setLocalStorage(allBooks)
    bookGenerator(allBooks)
}

function getLocalStorage () {
    let getBook = JSON.parse(localStorage.getItem("books"))
    if (getBook) {
        allBooks = getBook
    } else {
        allBooks = []
    }
    bookGenerator(allBooks)
}

window .addEventListener("load", getLocalStorage)
btn.addEventListener("click", addBook);
