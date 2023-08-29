const citiesData = [
  { city: "Tehran", temp: 12, weather: "sunny", humidity: 23, windSpeed: 32 },
  { city: "Tabriz", temp: 5, weather: "windy", humidity: 10, windSpeed: 40 },
  { city: "Amol", temp: 6, weather: "rainy", humidity: 29, windSpeed: 20 },
  { city: "Isfahan", temp: 10, weather: "sunny", humidity: 25, windSpeed: 32 },
  { city: "Mashhad", temp: -3, weather: "snowy", humidity: 20, windSpeed: 30 },
];

const images = [
  "./img/Great.jpeg",
  "./img/7628941.jpg'",
  "./img/Great.jpeg",
  "./img/download.jpeg",
  "./levi.jpeg",
  "./img/sky.jpg",
];

const $ = document;
let input = $.querySelector(".search-bar");
let btn = $.querySelector(".btn");

btn.addEventListener("click", function () {
  let inputValue = input.value;
  let mainCity =  citiesData.find(function (cityData) {
    return inputValue === cityData.city
  })


  if (mainCity) {
    $.querySelector(".weather").classList.remove("loading");
    $.querySelector(".city").innerHTML = "Weather in " + mainCity.city;
    $.querySelector(".temp").innerHTML = mainCity.temp + "°C";
    $.querySelector(".description").innerHTML = mainCity.weather;
    $.querySelector(".humidity").innerHTML =
      "Humidity :  " + mainCity.humidity + "%";
    $.querySelector(".wind").innerHTML =
      "Wind speed :   " + mainCity.windSpeed + "km/h";
  } else {
    alert("PLease enter a current city")
  }
});



setInterval(function () {
  let randomIndex = Math.floor(Math.random() * 6);
  $.body.style.backgroundImage = `url(${images[randomIndex]})`;
}, 5000);
