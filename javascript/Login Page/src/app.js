const registerForm = document.querySelector(".login-form")
const userNameInput = document.querySelector(".username-input")
const passwordInput = document.querySelector(".password-input")
const emailInput = document.querySelector(".email-input")

let db = null
let objectStore = null

window.addEventListener("load", () => {
  const DBOpenReq = indexedDB.open("Login Page", 11);

  DBOpenReq.addEventListener("error", err => {
    console.warn("Error:", err);
  });
  DBOpenReq.addEventListener("success", event =>{
    console.log("Success:", event)
  })
  DBOpenReq.addEventListener("upgradeneeded", event => {
    db = event.target.result
    console.log("Upgrade:", event.target.result)
    
    if (!db.objectStoreNames.contains("users")) {
        objectStore = db.createObjectStore("users")    
    }
  })
});

registerForm.addEventListener("submit", event => {
  event.preventDefault()

  let newUserLogger = {
    id: Math.floor(Math.random() * 9999),
    name: userNameInput.value,
    password: passwordInput.value,
    email: emailInput.value
  }
  console.log(newUserLogger)
})