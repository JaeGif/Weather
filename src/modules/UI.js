import { capitalize, todaysDate } from './utilities.js';

function updateUI(cityData) {
  const city = document.getElementById('city-name');
  const todayWeather = document.getElementById('day-weather');
  const temperature = document.getElementById('day-temp');
  const feelsLikeTemperature = document.getElementById('feels-like');
  const humidity = document.getElementById('humidity');
  const visibility = document.getElementById('visibility');
  const windSpeed = document.getElementById('wind-speed');
  const date = document.getElementById('todays-date');

  date.innerHTML = todaysDate();
  windSpeed.textContent = cityData.current.wind_speed;
  visibility.textContent = cityData.current.visibility;
  humidity.textContent = cityData.current.humidity;
  feelsLikeTemperature.textContent = cityData.current.feels_like;
  temperature.textContent = cityData.current.temp;
  todayWeather.textContent = cityData.current.weather[0].description;
  city.textContent = SearchManager.getLastSearch();
}

function updateWeekly(cityData) {
  const date = new Date();
  const n = date.getDay();
  let sum = 0;
  let dayIndex = [n];

  for (let i = 1; i < 6; i++) {
    if (sum <= 6) {
      sum = n + i;
    } else if (sum > 6) {
      sum = n + i - 6;
    }
    dayIndex.push(sum);
  }

  let n1 = dayIndex[1];
  let n2 = dayIndex[2];
  let n3 = dayIndex[3];
  let n4 = dayIndex[4];
  let n5 = dayIndex[5];
  let n6 = dayIndex[6];

  console.log(n, n1, n2, n3, n4, n5, n6);
  const nHigh = cityData.daily[0].temp.max;
  const nLow = cityData.daily[0].temp.min;

  const n1High = cityData.daily[1].temp.max;
  const n1Low = cityData.daily[1].temp.min;

  const n2High = cityData.daily[2].temp.max;
  const n2Low = cityData.daily[2].temp.min;

  const n3High = cityData.daily[3].temp.max;
  const n3Low = cityData.daily[3].temp.min;

  const n4High = cityData.daily[4].temp.max;
  const n4Low = cityData.daily[4].temp.min;

  const n5High = cityData.daily[5].temp.max;
  const n5Low = cityData.daily[5].temp.min;

  const n6High = cityData.daily[6].temp.max;
  const n6Low = cityData.daily[6].temp.min;
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
