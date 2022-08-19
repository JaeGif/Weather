import {
  fetchWeather,
  fetchUpdate,
  unitChangeUpdate,
} from './modules/apiCalls.js';
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
  const locationForm = document.querySelector('form');

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
  locationForm.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      e.preventDefault();
      fetchUpdate();
    }
  });
  submitButton.addEventListener('click', () => {
    fetchUpdate();
  });
})();