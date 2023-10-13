const userList = [
  { id: 1, name: "Amin", family: "Saeedi Rad" },
  { id: 2, name: "Amir", family: "Zehtab" },
  { id: 3, name: "Qadir", family: "Yolme" },
  { id: 4, name: "Babak", family: "Mohammadi" },
  { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 6, name: "Amin", family: "Saeedi Rad" },
  { id: 7, name: "Amir", family: "Zehtab" },
  { id: 8, name: "Qadir", family: "Yolme" },
  { id: 9, name: "Babak", family: "Mohammadi" },
  { id: 10, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 11, name: "Saeed", family: "Ehsani" },
  { id: 12, name: "Siamak", family: "Modiri" },
  { id: 13, name: "Mohsen", family: "Ansari" },
  { id: 14, name: "Mehran", family: "Ali Pour" },
  { id: 15, name: "Amir Hossein", family: "Mahtabi" },

  { id: 16, name: "Hossein", family: "Amino" },
  { id: 17, name: "Melika", family: "Ehsani" },
  { id: 18, name: "Qadir", family: "Yolme" },
  { id: 19, name: "Fatemeh", family: "Alilou" },
  { id: 20, name: "Ehsan", family: "Tayyebi" },

  { id: 21, name: "Zahra", family: "Gholami" },
  { id: 22, name: "Matin", family: "Sahebi" },
];

const userListContainer = document.querySelector("#list");
const pagination = document.querySelector("#pagination");

let currentPage = 1;
let rowCount = 5;

function displayUserList(allUserArr, userListContainer, currentPage, rowCount) {
  userListContainer.innerHTML = "";

  let endIndex = currentPage * rowCount;
  let startIndex = endIndex - rowCount;

  let paginatedUsers = allUserArr.slice(startIndex, endIndex);
  paginatedUsers.forEach(function (user) {
    const divElem = document.createElement("div");
    divElem.innerHTML = user.name + " " + user.family;
    divElem.classList.add("item");
    userListContainer.appendChild(divElem);
  });
}

function setupPagination(allUserArr, userListContainer, rowCount) {
  userListContainer.innerHTMl = "";

  let pageCount = Math.ceil(allUserArr.length / rowCount);

  for (let index = 1; index < pageCount + 1; index++) {
    let btn = paginationButtonGenerator(index, allUserArr);
    pagination.appendChild(btn);
  }
}

function paginationButtonGenerator(page, allUserArr) {
  const btn = document.createElement("button");
  btn.innerHTML = page;
  if (page === currentPage) {
    btn.classList.add("active");
  }
  btn.addEventListener("click", function () {
    currentPage = page;
    displayUserList(allUserArr, userListContainer, currentPage, rowCount);
    let prevBtn = document.querySelector("button.active");
    prevBtn.classList.remove("active");
    btn.classList.add("active");
  });
  return btn;
}

setupPagination(userList, userListContainer, rowCount);
displayUserList(userList, userListContainer, currentPage, rowCount);
