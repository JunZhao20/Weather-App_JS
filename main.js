const infoContainer = document.querySelector(".info-container");
const locationSearch = document.querySelector(".search");
const searchButton = document.querySelector(".btn");
const weatherKey = {
  apiKey: "43d1cdcbbcfd014aa1d594023bc45648",
  fetchWeather: function (location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=43d1cdcbbcfd014aa1d594023bc45648`
    )
      .then((response) => response.json())
      .then((data) => weatherKey.renderData(data));
  },
  renderData: function (data) {
    let html = `        
    <div class="location">📍${data.name}</div>
    <div class="weather-readings">
      <div class="weather-icon">
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="" />
      </div>
      <div class="temp">${Math.round(data.main.temp)}°C</div>
    </div>
    <div class="readings-container">
      <div class="weather-text">${data.weather[0].description}</div>
      <div class="humidity-reading">Humidity: ${data.main.humidity}%</div>
      <div class="wind-speed">Wind speed:${data.wind.speed}Kmh</div>
    </div>`;
    infoContainer.insertAdjacentHTML("beforeend", html);
  },
};

searchButton.addEventListener("click", function () {
  if (locationSearch.value === "") {
    alert("No location has been inputed");
  }

  let counter = 0;
  weatherKey.fetchWeather(locationSearch.value);
  counter += 1;
  if (counter > 0) {
    infoContainer.replaceChildren();
    counter = 0;
  }
  locationSearch.value = "";
});
