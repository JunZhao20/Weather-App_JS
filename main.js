const infoContainer = document.querySelector(".info-container");

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
    console.log(data);
  },
};

weatherKey.fetchWeather("london");
