const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const heightValue = document.querySelector("#height-val");
const weightVAlue = document.querySelector("#weight-val");

function calculate (event) {
    if (event.target.id === "weight") {
        weightVAlue.innerHTML = event.target.value + " kg"
    } else if (event.target.id === "height") {
        heightValue.innerHTML = event.target.value + " cm"
    }
    console.log(heightInput.value)
    console.log(weightInput.value)
}
