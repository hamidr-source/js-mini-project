const $ = document
const switchBtn = $.querySelector(".switch")

window.addEventListener("load", function () {
    let localStorageThemeValue = localStorage.getItem("theme")
    if (localStorageThemeValue === "dark") {
        $.body.classList.add("dark")
    }
})

switchBtn.addEventListener("click", function () {
    if ($.body.classList.value === "") {
        $.body.classList.add("dark")
        localStorage.setItem("theme", "dark")
    } else {
        $.body.classList.remove("dark")
        localStorage.setItem("theme", "light")
    }
})

