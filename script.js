// //Register for API key. Dashboard with form inputs. Cities add to list of searched
// //pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs,
// // How to retrieve geographical coordinates given a city name
// //Use local storage-localStorage.setItem('textArea);
// //construct query url to make API call
// //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//add lat and lon variables to define
var APIKey = "7df31ef07a9daa898e410e6debc655f9";
const button = document.querySelector(".city");
var callLocation = ["lat", "lon"];

//work on Fetch request error to function
function callLatQuestionMark() {
  const city = "city";
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q= " +
    city +
    "&appid=" +
    APIKey;
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
}

// event listener should invoke callLatQuestionMark function on submit button
// document.querySelector('city' ('click', e => {'submit'
//   console.log(e)
// })
button.addEventListener("click", callLatQuestionMark);

function callLatQuestionMarkTwo(lat, lon) {
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

function displayFiveDays(arrayOfTimes) {
  for (let i = 0; i < arrayOfTimes.length; i++) {
    const newDate = new Date(arrayOfTimes[i].dt * 1000);

    // gets us the weather at 1400 for the next 5 days
    if (newDate.getHours() === 14) {
      const weatherOfDay = arrayOfTimes[i];
      console.log(weatherOfDay);
      // In this block you need to dynamically add content onto your page ei document.createElement / append etc
      const resultList = {
        temp: "",
        wind: "",
        humidity: "",
      };
    }

    //console.log(arrayOfTimes[i])
  }
}

//const today=moment();
//$("#currentDay").text(today.format('MMMM Do YYYY'));
//console.log(moment())
//const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=7df31ef07a9daa898e410e6debc655f9'
//console.log()

//Variables for location
//var location = document.getElementById("lon,lat")
//console.log("lon,lat")

//navigator.geolocation.getCurrentLocation(getLatLon);
//var latitude = location.coords.latitude;
//var longitude = location.coords.longitude;
//function getLatLon(location) {
//console.log(latitude);
//}
// var location ="longitude, latitude"
// console.log(location)
// var day
// var temperature
// var wind
// var humidity
// cityEl.
// }

// // fetch(queryURL){

// // }
// localStorage.setItem
