const registerForm = document.querySelector(".login-form");
const userNameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const emailInput = document.querySelector(".email-input");
const userTableElem = document.querySelector("table")

let db = null;
let objectStore = null;

window.addEventListener("load", () => {
  const DBOpenReq = indexedDB.open("Login Page", 14);

  DBOpenReq.addEventListener("error", (err) => {
    console.warn("Error:", err);
  });

  DBOpenReq.addEventListener("success", (event) => {
    console.log("Success:", event);
    db = event.target.result;
    getAllUsers()
  });

  DBOpenReq.addEventListener("upgradeneeded", (event) => {
    db = event.target.result;
    console.log("Upgrade:", event.target.result);

    if (!db.objectStoreNames.contains("users")) {
      objectStore = db.createObjectStore("users", {
        keyPath: "id",
      });
    }
  });
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let newUserLogger = {
    id: Math.floor(Math.random() * 9999),
    name: userNameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
  };

  let tx = db.transaction("users", "readwrite");

  tx.addEventListener("error", (err) => {
    console.warn("Tx Error:", err);
  });

  tx.addEventListener("success", (event) => {
    console.log("Tx Success:", event);
  });

  let store = tx.objectStore("users");
  let req = store.add(newUserLogger);

  req.addEventListener("error", (err) => {
    console.warn("Request Error:", err);
  });

  req.addEventListener("success", (event) => {
    console.log("Request Success:", event);
    clearInputs()
  });
});

function clearInputs() {
  userNameInput.value = "";
  passwordInput.value = "";
  emailInput.value = "";
}

function getAllUsers () {
  let tx = db.transaction("users", "readonly");

  tx.addEventListener("error", (err) => {
    console.warn("Tx Error:", err);
  });

  tx.addEventListener("success", (event) => {
    console.log("Tx Success:", event);
  });

  let store = tx.objectStore("users");
  let req = store.getAll();

  req.addEventListener("error", (err) => {
    console.warn("Get Request Error:", err);
  });

  req.addEventListener("success", (event) => {
    console.log("Get Request Success:", event);
    clearInputs()
  });

}