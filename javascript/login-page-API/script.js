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

    fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify(userData)
    }) .then(res => console.log(res))
}) 