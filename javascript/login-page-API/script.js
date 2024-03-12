const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname")
const password = document.querySelector(".password")
const btn = document.querySelector("button")

btn.addEventListener("click", (event) => {
    event.preventDefault()
    let userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value
    }

    fetch("https://user-login-api-c1510-default-rtdb.firebaseio.com/", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(userData)
    }) .then(res => console.log(res))
}) 