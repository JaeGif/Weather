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

function updateUnitsUI(units) {
  const temperatureNodes = document.getElementsByClassName('units');
  const smallTemperatureNodes = document.getElementsByClassName('small_units');

  const windSpeedUnit = document.getElementById('speed-units');

  if (units === 'imperial') {
    for (let i = 0; i < temperatureNodes.length; i++) {
      temperatureNodes[i].innerHTML = `&#8457`;
    }
    for (let j = 0; j < smallTemperatureNodes.length; j++) {
      smallTemperatureNodes[j].innerHTML = `&#8457`;
    }
    windSpeedUnit.textContent = 'mph';
  } else if (units === 'metric') {
    for (let i = 0; i < temperatureNodes.length; i++) {
      temperatureNodes[i].innerHTML = `&#8451;`;
    }
    for (let j = 0; j < smallTemperatureNodes.length; j++) {
      smallTemperatureNodes[j].innerHTML = `&#8451;`;
    }
    windSpeedUnit.textContent = 'm/s';
  }
}
/**
 * @return {string} date
 */
function todaysDate() {
  return date;
}
function matchWeatherToSVG(cityData) {}

class UnitsManager {
  static units = 'imperial';

  static getUnits() {
    return UnitsManager.units;
  }
  /**
   * @param {string} unitString imperial or metric
   */
  static setUnits(unitString) {
    UnitsManager.units = unitString;
  }
}

class SearchManager {
  static lastSearch = 'New York';
  static getLastSearch() {
    return SearchManager.lastSearch;
  }

  /**
   * @param {string} search city capitalized
   */
  static setLastSearch(search) {
    SearchManager.lastSearch = search;
  }
}
export { updateUI, updateUnitsUI, UnitsManager, SearchManager };
