const API_KEY = "dcbcae380a2d780c84dcc5da33b45f43";

function getGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} /`;
    })
}

function getGeoError() {
  alert("Cannot find location information");
}

navigator.geolocation.getCurrentPosition(getGeoOK, getGeoError);