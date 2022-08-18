function updateUI(cityData) {
  const city = document.getElementById('city-name');
  const todayWeather = document.getElementById('day-weather');
  const temperature = document.getElementById('day-temp');
  const feelsLikeTemperature = document.getElementById('feels-like');
  const humidity = document.getElementById('humidity');
  const visibility = document.getElementById('visibility');
  const windSpeed = document.getElementById('wind-speed');

  windSpeed.textContent = cityData.wind.speed;
  visibility.textContent = cityData.visibility;
  humidity.textContent = cityData.main.humidity;
  feelsLikeTemperature.textContent = cityData.main.feels_like;
  temperature.textContent = cityData.main.temp;
  todayWeather.textContent = cityData.weather[0].description;
  city.textContent = cityData.name;
}

/**
 * @return {string} date
 */
function todaysDate() {
  return date;
}
function matchWeatherToSVG(cityData) {}

class UnitsManager {}
export { updateUI };
