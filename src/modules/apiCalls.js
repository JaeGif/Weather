import {
  UnitsManager,
  SearchManager,
  updateUI,
  updateUnitsUI,
  updateWeeklyUI,
  updateHourlyUI,
} from './UI.js';
import { capitalize } from './utilities.js';

// units = 'imperial / metric
async function fetchWeather(latitude, longitude, units = 'imperial') {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?units=${units}&lat=${latitude}&lon=${longitude}&APPID=a4b3f65b2dbd15c2b33875e013b2dc1b`,
    { mode: 'cors' }
  );
  const dataJSON = await response.json();
  return dataJSON;
}
async function fetchUpdate() {
  let locationQuery = document.querySelector('input').value;
  const errorBlock = document.getElementById('error-block');

  let lat = '';
  let lon = '';
  if (locationQuery === '') {
    locationQuery = undefined;
    locationQuery = await fetchLatLon();
  } else {
    locationQuery = capitalize(locationQuery);
    SearchManager.setLastSearch(locationQuery);
    locationQuery = await fetchLatLon(locationQuery);
  }
  console.log(locationQuery);
  try {
    lat = locationQuery.coord.lat;
    lon = locationQuery.coord.lon;
    errorBlock.style.display = 'none';
  } catch (error) {
    errorBlock.style.display = 'block';
  }

  const data = await fetchWeather(lat, lon, UnitsManager.getUnits());
  updateUI(data);
  updateWeeklyUI(data);
  updateHourlyUI(data);
}

async function unitChangeUpdate(lastLocation, units) {
  const latLon = await fetchLatLon(lastLocation);
  const lat = latLon.coord.lat;
  const lon = latLon.coord.lon;

  const data = await fetchWeather(lat, lon, units);
  updateUI(data);
  updateWeeklyUI(data);
  updateHourlyUI(data);
  updateUnitsUI(UnitsManager.getUnits());
}

async function fetchLatLon(location = SearchManager.getLastSearch()) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a4b3f65b2dbd15c2b33875e013b2dc1b`,
    { mode: 'cors' }
  );
  const dataJSON = response.json();
  return dataJSON;
}
export { fetchUpdate, unitChangeUpdate };
