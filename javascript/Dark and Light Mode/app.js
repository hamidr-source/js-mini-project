const $ = document
const switchBtn = $.querySelector(".switch")
let isDark = false

switchBtn.addEventListener("click", function () {
    if (!isDark) {
        $.body.classList.add("dark")
        localStorage.setItem("theme", "dark")
        isDark = true
    } else {
        $.body.classList.remove("dark")
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

