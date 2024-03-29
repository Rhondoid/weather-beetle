// //Register for API key. Dashboard with form inputs. Cities add to list of searched
// //pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs,
// // How to retrieve geographical coordinates given a city name
// //Use local storage-localStorage.setItem('textArea);
// //construct query url to make API call
// //api.open weather map.org/data/2.5/weather?q={city name}&appid={API key}
//add lat and lon variables to define

// const cityInputEl = document.getElementById("cityInput");
// var callLocation = ["lat", "lon"];
// var userFormEl = document.getElementById("user-form");
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const fiveDayForecast = document.getElementById("fiveDayForecast");

searchForm.addEventListener("submit", function(event){
  event.preventDefault();
  const city = cityInput.value.trim();
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
});


var callLocation = function (event) {
  var queryURL = 
  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      callLocationTwo(result.coord.lon, result.coord.lat);
      //console.log(lat, lon)
      // callLatQuestionMark(lat, lon);
      console.log(result);
    });
};

//utilizing the form and submit button
userFormEl.addEventListener("submit", callLocation);

//this gets the longitude and latitude
function callLocationTwo(lat, lon) {
  var queryUrlFiveDay = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;
  // var queryUrlFiveDay = ""
  fetch(queryUrlFiveDay)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      displayFiveDays(result.list);
      console.log(result);
    });
}

// function displayFiveDays(arrayOfTimes) {
//   for (let i = 0; i < arrayOfTimes.length; i++) {
//     const newDate = new Date(arrayOfTimes[i].dt * 1000)};

//     // gets the weather at 1400 for the next 5 days
//     if (newDate.getHours() === 14) {
//       const weatherOfDay = arrayOfTimes[i];
//       console.log(weatherOfDay);
//     };
//       // Add content onto the page ei document.createElement / append et
//       const todaysWeather = {
//         image: <img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="OpenWeatherMap image"/>,
//         temp: "",
//         wind: "",
//         humidity: ""
//       };
      
//       const weatherOfDay = arrayOfTimes[i];
//       const iconCode = weatherOfDay.weather[0].icon;
//       todaysWeather.image = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      
//       const day1El = document.createElement("img");
//       day1El.src = todaysWeather.image;
      
//       todaysWeather.appendChild(day1El);
//       console.log(day1El); 
//     }
// const today=moment(
//   $("#currentDay").text(today.format('MMMM Do YYYY'))
//   );

// localStorage.setItem;