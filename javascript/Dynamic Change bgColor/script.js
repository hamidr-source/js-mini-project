const colorsBtn = document.querySelectorAll(".btn")

colorsBtn.forEach(function (colorBtn) {
    colorBtn.addEventListener("click" , function() {
        document.documentElement.style.setProperty("--theme-color", colorBtn.dataset.color)
    })
})