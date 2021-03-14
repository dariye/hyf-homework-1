const locationInput = document.getElementById("search-input");
const dataP = document.getElementById("data");
const submitButton = document.getElementById("submit-btn")
const autoSearchButton = document.getElementById("auto-search")
const apiKey = "6e15115af9460b506e5416b9954fe08e"
let cityName = locationInput.value;

function cityWeather() {
    cityName = locationInput.value.trim().toLowerCase();
    if (!cityName) {
        alert("Please provide with a city name")
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(weatherData => {
                let temp = Math.round(weatherData.main.temp)
                let feelsLike = Math.round(weatherData.main.feels_like)
                let todaysMin = Math.round(weatherData.main.temp_min)
                let todaysMax = Math.round(weatherData.main.temp_max)
                let sunrise = unixToHHMM(weatherData.sys.sunrise);
                let sunset = unixToHHMM(weatherData.sys.sunset);
                capitalizedCityName = capitalizeTheFirstLetterOfEachWord(weatherData.name);
                capitalizedWeather = capitalizeTheFirstLetterOfEachWord(weatherData.weather[0].description);
                dataP.innerHTML =
                    `<b>Location:</b> ${capitalizedCityName}<br>
            <b>Right Now:</b> ${capitalizedWeather}<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png"> <br>
            <b>Temp:</b> ${temp}°C<br>
            <b>Feels Like:</b> ${feelsLike}°C<br>
            <b>Humidity:</b> ${weatherData.main.humidity}%<br>
            <b>Wind Speed:</b> ${weatherData.wind.speed}Km/h<br>
            <b>Todays Max:</b> ${todaysMax}°C<br>
            <b>Todays Min:</b> ${todaysMin}°C<br>
            <b>Sunrise:</b> ${sunrise}<br>
            <b>Sunset:</b> ${sunset}<br>            
            `
            })
            .catch(error => {
                alert("Could not find the chosen city. Check Spelling and try again.")
            })

    }
}
autoSearchButton.addEventListener("click", () => { navigator.geolocation.getCurrentPosition(currentLocationWeather) });
function currentLocationWeather(pos) {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(weatherData => {
            let temp = Math.round(weatherData.main.temp)
            let feelsLike = Math.round(weatherData.main.feels_like)
            let todaysMin = Math.round(weatherData.main.temp_min)
            let todaysMax = Math.round(weatherData.main.temp_max)
            let sunrise = unixToHHMM(weatherData.sys.sunrise);
            let sunset = unixToHHMM(weatherData.sys.sunset);
            capitalizedCityName = capitalizeTheFirstLetterOfEachWord(weatherData.name);
            capitalizedWeather = capitalizeTheFirstLetterOfEachWord(weatherData.weather[0].description);
            dataP.innerHTML =
                `<b>Location:</b> ${capitalizedCityName}<br>
            <b>Right Now:</b> ${capitalizedWeather}<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png"> <br>
            <b>Temp:</b> ${temp}°C<br>
            <b>Feels Like:</b> ${feelsLike}°C<br>
            <b>Humidity:</b> ${weatherData.main.humidity}%<br>
            <b>Wind Speed:</b> ${weatherData.wind.speed}Km/h<br>
            <b>Todays Max:</b> ${todaysMax}°C<br>
            <b>Todays Min:</b> ${todaysMin}°C<br>
            <b>Sunrise:</b> ${sunrise}<br>
            <b>Sunset:</b> ${sunset}<br>            
            `
        })


}



function unixToHHMM(unix) {
    let unix_timestamp = unix
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2);

    return formattedTime;

}
function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}








locationInput.addEventListener("search", cityWeather)
submitButton.addEventListener("click", cityWeather)