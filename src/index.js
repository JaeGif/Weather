import { fetchWeather } from './modules/apiCalls.js';
import { updateUI } from './modules/UI.js';

window.onload = fetchUpdate();
const addListeners = (() => {
  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', () => {
    fetchUpdate();
  });
})();

async function fetchUpdate() {
  let locationQuery = document.querySelector('input').value;
  if (locationQuery === '') {
    locationQuery = undefined;
  }
  const data = await fetchWeather(locationQuery);
  updateUI(data);
}
