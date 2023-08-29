let selectCountry = document.querySelector('.countrySelect')
let selectCity = document.querySelector('.citySelect')
const cities = {
    Iran: ["tehran", "tabriz", "mashhad", "isfahan", "shiraz"],
    USA: ["los angles", "new york", "washington", "texas"],
    Canada: ["vancouver", "quebec", "toronto"]
}


selectCountry.addEventListener('change', function () {
    if (selectCountry.value === 'Please Select') {
        selectCity.innerHTML = ''
        selectCity.innerHTML += '<option>Select Country</option>'
    }else {
        let mainCountry = selectCountry.value
        let mainCities = cities[mainCountry]
        selectCity.innerHTML = ''
        mainCities.forEach(function (city) {
        selectCity.innerHTML += '<option>' + city + '</option>'
        });
    }
})