import { fetchWeather } from './modules/apiCalls.js';
import {
  UnitsManager,
  SearchManager,
  updateUI,
  updateUnitsUI,
} from './modules/UI.js';

window.onload = fetchUpdate();
const addListeners = (() => {
  const submitButton = document.querySelector('#submit');
  const toMetricButton = document.getElementById('display_F');
  const toImperialButton = document.getElementById('display_C');

  toMetricButton.addEventListener('click', () => {
    toMetricButton.style.display = 'none';
    toImperialButton.style.display = 'flex';
    UnitsManager.setUnits('metric');
    unitChangeUpdate(SearchManager.getLastSearch(), UnitsManager.getUnits());
  });
  toImperialButton.addEventListener('click', () => {
    toImperialButton.style.display = 'none';
    toMetricButton.style.display = 'flex';
    UnitsManager.setUnits('imperial');
    unitChangeUpdate(SearchManager.getLastSearch(), UnitsManager.getUnits());
  });

  submitButton.addEventListener('click', () => {
    fetchUpdate();
  });
})();

async function fetchUpdate() {
  let locationQuery = document.querySelector('input').value;
  if (locationQuery === '') {
    locationQuery = undefined;
  } else {
    locationQuery = capitalize(locationQuery);
    SearchManager.setLastSearch(locationQuery);
  }
  const data = await fetchWeather(locationQuery);
  updateUI(data);
}

async function unitChangeUpdate(lastLocation, units) {
  const data = await fetchWeather(lastLocation, units);
  updateUI(data);
  updateUnitsUI(UnitsManager.getUnits());
}

function capitalize(string) {
  string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  return string;
}
