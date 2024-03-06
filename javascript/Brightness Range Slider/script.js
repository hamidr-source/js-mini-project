const inputRange = document.querySelector("#range")

inputRange.addEventListener("change", function (event) {
    console.log(event.target.value) 
    document.body.style.filter = 'brightness('+ event.target.value + '%)'  
})