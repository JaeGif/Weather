/* https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key} */
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
  console.log(dataJSON);
  return dataJSON;
}
async function fetchUpdate() {
  let locationQuery = document.querySelector('input').value;
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
  lat = locationQuery[0].lat;
  lon = locationQuery[0].lon;
  const data = await fetchWeather(lat, lon, UnitsManager.getUnits());
  updateUI(data);
  updateWeeklyUI(data);
  updateHourlyUI(data);
}

async function unitChangeUpdate(lastLocation, units) {
  const latLon = await fetchLatLon(lastLocation);
  const lat = latLon[0].lat;
  const lon = latLon[0].lon;

  const data = await fetchWeather(lat, lon, units);
  updateUI(data);
  updateWeeklyUI(data);
  updateHourlyUI(data);
  updateUnitsUI(UnitsManager.getUnits());
}

async function fetchLatLon(city = SearchManager.getLastSearch()) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=a4b3f65b2dbd15c2b33875e013b2dc1b`,
    { mode: 'cors' }
  );
  const dataJSON = response.json();

  return dataJSON;
}
export { fetchWeather, fetchUpdate, unitChangeUpdate };
