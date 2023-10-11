const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const height = document.querySelector("#height-val");
const weight = document.querySelector("#weight-val");
const result = document.querySelector("#result");
const category = document.querySelector("#category");

function BMICalculator () {
    let heightInputValue = heightInput.value
    let weightInputValue = weightInput.value
    console.log(weightInputValue, heightInputValue)
    let bmiValue = (weightInputValue / Math.pow(heightInputValue / 100, 2)).toFixed(1)
    console.log(bmiValue)
     
}

heightInput.addEventListener("change", BMICalculator)
weightInput.addEventListener("change", BMICalculator)