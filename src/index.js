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
