// API Key APPID=a4b3f65b2dbd15c2b33875e013b2dc1b
// https://api.openweathermap.org/data/2.5/weather?q=London&APPID=a4b3f65b2dbd15c2b33875e013b2dc1b
// JSON respone Structure:
/* {
  coord: { lon: -74.006, lat: 40.7143 },
  weather: [
    { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }
  ],
  base: 'stations',
  main: {
    temp: 295.58,
    feels_like: 295.47,
    temp_min: 293.57,
    temp_max: 296.67,
    pressure: 1017,
    humidity: 61
  },
  visibility: 10000,
  wind: { speed: 4.92, deg: 360, gust: 8.94 },
  clouds: { all: 20 },
  dt: 1660528471,
  sys: {
    type: 2,
    id: 2039034,
    country: 'US',
    sunrise: 1660471525,
    sunset: 1660521372
  },
  timezone: -14400,
  id: 5128581,
  name: 'New York',
  cod: 200
} */

import { UnitsManager, SearchManager, updateUI, updateUnitsUI } from './UI.js';
import { capitalize } from './utilities.js';
// units = 'imperial / metric
async function fetchWeather(location = 'New York', units = 'imperial') {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=${units}&q=${location}&APPID=a4b3f65b2dbd15c2b33875e013b2dc1b`,
    { mode: 'cors' }
  );
  const dataJSON = await response.json();
  console.log(dataJSON);
  return dataJSON;
}
async function fetchUpdate() {
  let locationQuery = document.querySelector('input').value;
  if (locationQuery === '') {
    locationQuery = undefined;
  } else {
    locationQuery = capitalize(locationQuery);
    SearchManager.setLastSearch(locationQuery);
  }
  const data = await fetchWeather(locationQuery, UnitsManager.getUnits());
  updateUI(data);
}

async function unitChangeUpdate(lastLocation, units) {
  const data = await fetchWeather(lastLocation, units);
  updateUI(data);
  updateUnitsUI(UnitsManager.getUnits());
}

export { fetchWeather, fetchUpdate, unitChangeUpdate };
