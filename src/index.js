import { fetchWeather } from './modules/apiCalls';

const locationQuery = document.querySelector('input').value;
fetchWeather(locationQuery);
