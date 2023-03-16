var APIKey = "7df31ef07a9daa898e410e6debc655f9";
var searchForm = document.getElementById("search-form");
console.log(searchForm);
function handleSearch(event) {
  event.preventDefault();
  var cityName = document.getElementById("cityInput").value;
  getWeather(cityName)
  
}
function getWeather(city){
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`;
    fetch(currentWeatherUrl).then(response => response.json()) .then(result =>{
        console.log(result)
        var tempEl = document.getElementById("temp")
        tempEl.textContent = result.main.temp
        var windEl = document.getElementById("wind")
        windEl.textContent = result.wind.speed
        var humidityEl = document.getElementById("humidity")
        humidityEl.textContent = result.main.humidity
        getForecast(result.coord.lat, result.coord.lon)
    })
}
function getForecast(lat,lon){
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`
fetch(forecastUrl).then(response => response.json()) .then(result =>{
    console.log(result)
    var forecastArr = []
    for(var i = 0; i < result.list.length; i++){
        
        let targetTime = result.list[i].dt_txt.split(" ") .pop()
        console.log(targetTime)
        if(targetTime==="12:00:00"){
            forecastArr.push(result.list[i])
        }
    }
    console.log(forecastArr)
    for(var i = 0; i<forecastArr.length; i++){
        var htmlString = `<div class="day">
        <div class="image" value=""></div>
        <p>Temperature: <span id="temp">${forecastArr[i].main.temp}</span></p>
        <p>Wind speed: <span id="wind">${forecastArr[i].wind.speed}</span></p>
        <p>Humidity: <span id="humidity">${forecastArr[i].main.humidity}</span></p>
      </div>`
      document.getElementById("fore").appendChild(htmlString)
    }
})
}
searchForm.addEventListener("submit", handleSearch);
