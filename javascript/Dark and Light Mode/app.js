const $ = document
const switchBtn = $.querySelector(".switch")
let isDark = false

switchBtn.addEventListener("click", function () {
    $.body.classList.toggle("dark")
    if (!isDark) {
        localStorage.setItem("theme", "dark")
        isDark = true
    } else {
        localStorage.setItem("theme", "light")
        isDark = false
    }
})

window.addEventListener("load", function () {
    let localStorageThemeValue = localStorage.getItem("theme")
    if (localStorageThemeValue === "dark") {
        $.body.classList.add("dark")
    }
})

