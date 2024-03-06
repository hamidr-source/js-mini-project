const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const height = document.querySelector("#height-val");
const weight = document.querySelector("#weight-val");
const result = document.querySelector("#result");
const category = document.querySelector("#category");

function BMICalculator() {
  let heightInputValue = heightInput.value;
  let weightInputValue = weightInput.value;
  height.innerHTML = heightInputValue + " cm";
  weight.innerHTML = weightInputValue + " kg";
  console.log(weightInputValue, heightInputValue);
  let bmiValue = (
    weightInputValue / Math.pow(heightInputValue / 100, 2)
  ).toFixed(1);
  console.log(bmiValue);
  result.innerHTML = bmiValue;
  if (bmiValue < 18.5) {
    category.innerHTML = "Under Weight";
    result.style.color = "#44fc44d";
  } else if (18.5 <= bmiValue && bmiValue <= 24.9) {
    category.innerHTML = "Normal Weight";
    result.style.color = "#0be881";
  } else if (25 <= bmiValue && bmiValue <= 29.9) {
    category.innerHTML = "Over Weight";
    result.style.color = "#ff884d";
  } else {
    category.innerHTML = "Obese";
    result.style.color = "#ff5e4d";
  }
}

heightInput.addEventListener("input", BMICalculator);
weightInput.addEventListener("input", BMICalculator);
