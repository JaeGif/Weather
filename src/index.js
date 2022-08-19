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
  const submitButton = document.getElementById('submit');
  const toMetricButton = document.getElementById('display_F');
  const toImperialButton = document.getElementById('display_C');
  const locationForm = document.querySelector('form');
  const toDailyButton = document.getElementById('daily');
  const toHourlyButton = document.getElementById('hourly');
  const dailyContainer = document.getElementById(
    'seven-day-forecast-container'
  );
  const hourlyContainer = document.getElementById('hourly-forecast-container');

  toDailyButton.addEventListener('click', () => {
    toDailyButton.classList.remove('not-selected');
    toHourlyButton.classList.remove('selected');
    toHourlyButton.classList.add('not-selected');
    if (!toDailyButton.classList.contains('selected')) {
      toDailyButton.classList.add('selected');
    }
    dailyContainer.style.display = 'grid';
    hourlyContainer.style.display = 'none';
  });

  toHourlyButton.addEventListener('click', () => {
    toHourlyButton.classList.remove('not-selected');
    toDailyButton.classList.remove('selected');
    toDailyButton.classList.add('not-selected');
    if (!toHourlyButton.classList.contains('selected')) {
      toHourlyButton.classList.add('selected');
    }
    dailyContainer.style.display = 'none';
    hourlyContainer.style.display = 'grid';
  });
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
