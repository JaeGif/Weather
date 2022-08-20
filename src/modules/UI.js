import { todaysDate, matchWeatherToSVG } from './utilities.js';

function updateUI(cityData) {
  const city = document.getElementById('city-name');
  const todayWeather = document.getElementById('day-weather');
  const temperature = document.getElementById('day-temp');
  const feelsLikeTemperature = document.getElementById('feels-like');
  const humidity = document.getElementById('humidity');
  const visibility = document.getElementById('visibility');
  const windSpeed = document.getElementById('wind-speed');
  const date = document.getElementById('todays-date');
  const currentWeatherIcon = document.querySelector('.current_icon');

  currentWeatherIcon.src = matchWeatherToSVG(cityData.current.weather[0].id);
  date.innerHTML = todaysDate(cityData);
  windSpeed.textContent = cityData.current.wind_speed;
  visibility.textContent = cityData.current.visibility;
  humidity.textContent = cityData.current.humidity;
  feelsLikeTemperature.textContent = cityData.current.feels_like;
  temperature.textContent = cityData.current.temp;
  todayWeather.textContent = cityData.current.weather[0].description;

  city.textContent = SearchManager.getLastSearch();
}

function updateWeeklyUI(cityData) {
  const localOffset = new Date().getTimezoneOffset() * 60;
  const dt =
    (cityData.current.dt + localOffset + cityData.timezone_offset) * 1000;
  const date = new Date(dt);
  const n = date.getDay();
  let sum = 0;
  let dayIndex = [];
  let count = n;

  for (let i = 1; i < 8; i++) {
    if (count <= 6) {
      sum = count;
    } else if (count > 6) {
      sum = count - 7;
    }
    count++;
    dayIndex.push(sum);
  }
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const n1 = document.getElementById('n-1');
  const n2 = document.getElementById('n-2');
  const n3 = document.getElementById('n-3');
  const n4 = document.getElementById('n-4');
  const n5 = document.getElementById('n-5');
  const n6 = document.getElementById('n-6');
  const n7 = document.getElementById('n-7');

  n1.textContent = days[dayIndex[1]];
  n2.textContent = days[dayIndex[2]];
  n3.textContent = days[dayIndex[3]];
  n4.textContent = days[dayIndex[4]];
  n5.textContent = days[dayIndex[5]];
  n6.textContent = days[dayIndex[6]];
  n7.textContent = days[dayIndex[0]];

  const n1High = document.getElementById('n-1-high');
  n1High.textContent = cityData.daily[1].temp.max;
  const n1Low = document.getElementById('n-1-low');
  n1Low.textContent = cityData.daily[1].temp.min;

  const n2High = document.getElementById('n-2-high');
  n2High.textContent = cityData.daily[2].temp.max;
  const n2Low = document.getElementById('n-2-low');
  n2Low.textContent = cityData.daily[2].temp.min;

  const n3High = document.getElementById('n-3-high');
  n3High.textContent = cityData.daily[3].temp.max;
  const n3Low = document.getElementById('n-3-low');
  n3Low.textContent = cityData.daily[3].temp.min;

  const n4High = document.getElementById('n-4-high');
  n4High.textContent = cityData.daily[4].temp.max;
  const n4Low = document.getElementById('n-4-low');
  n4Low.textContent = cityData.daily[4].temp.min;

  const n5High = document.getElementById('n-5-high');
  n5High.textContent = cityData.daily[5].temp.max;
  const n5Low = document.getElementById('n-5-low');
  n5Low.textContent = cityData.daily[5].temp.min;

  const n6High = document.getElementById('n-6-high');
  n6High.textContent = cityData.daily[6].temp.max;
  const n6Low = document.getElementById('n-6-low');
  n6Low.textContent = cityData.daily[6].temp.min;

  const n7High = document.getElementById('n-7-high');
  n7High.textContent = cityData.daily[7].temp.max;
  const n7Low = document.getElementById('n-7-low');
  n7Low.textContent = cityData.daily[7].temp.min;

  const n1dailyWeatherSVG = document.getElementById('n-1-svg');
  n1dailyWeatherSVG.src = matchWeatherToSVG(cityData.daily[1].weather[0].id);
  const n2dailyWeatherSVG = document.getElementById('n-2-svg');
  n2dailyWeatherSVG.src = matchWeatherToSVG(cityData.daily[2].weather[0].id);
  const n3dailyWeatherSVG = document.getElementById('n-3-svg');
  n3dailyWeatherSVG.src = matchWeatherToSVG(cityData.daily[3].weather[0].id);
  const n4dailyWeatherSVG = document.getElementById('n-4-svg');
  n4dailyWeatherSVG.src = matchWeatherToSVG(cityData.daily[4].weather[0].id);
  const n5dailyWeatherSVG = document.getElementById('n-5-svg');
  n5dailyWeatherSVG.src = matchWeatherToSVG(cityData.daily[5].weather[0].id);
  const n6dailyWeatherSVG = document.getElementById('n-6-svg');
  n6dailyWeatherSVG.src = matchWeatherToSVG(cityData.daily[6].weather[0].id);
  const n7dailyWeatherSVG = document.getElementById('n-7-svg');
  n7dailyWeatherSVG.src = matchWeatherToSVG(cityData.daily[7].weather[0].id);
}

function updateHourlyUI(cityData) {
  const localOffset = new Date().getTimezoneOffset() * 60;
  const dt =
    (cityData.current.dt + localOffset + cityData.timezone_offset) * 1000;
  const newDate = new Date(dt);
  const h = newDate.getHours();

  let sum = 0;
  let hourIndex = [];
  let count = h + 1;

  for (let i = 0; i < 8; i++) {
    if (count < 24) {
      sum = count;
    } else if (count >= 24) {
      sum = count - 24;
    }
    count++;
    hourIndex.push(sum);
  }

  const h1 = document.getElementById('h-1');
  h1.textContent = hourIndex[0] + ':00';
  const h2 = document.getElementById('h-2');
  h2.textContent = hourIndex[1] + ':00';
  const h3 = document.getElementById('h-3');
  h3.textContent = hourIndex[2] + ':00';
  const h4 = document.getElementById('h-4');
  h4.textContent = hourIndex[3] + ':00';
  const h5 = document.getElementById('h-5');
  h5.textContent = hourIndex[4] + ':00';
  const h6 = document.getElementById('h-6');
  h6.textContent = hourIndex[5] + ':00';
  const h7 = document.getElementById('h-7');
  h7.textContent = hourIndex[6] + ':00';
  const h8 = document.getElementById('h-8');
  h8.textContent = hourIndex[7] + ':00';

  const h1Data = document.getElementById('h-1-data');
  const h2Data = document.getElementById('h-2-data');
  const h3Data = document.getElementById('h-3-data');
  const h4Data = document.getElementById('h-4-data');
  const h5Data = document.getElementById('h-5-data');
  const h6Data = document.getElementById('h-6-data');
  const h7Data = document.getElementById('h-7-data');
  const h8Data = document.getElementById('h-8-data');

  h1Data.textContent = cityData.hourly[1].temp;
  h2Data.textContent = cityData.hourly[2].temp;
  h3Data.textContent = cityData.hourly[3].temp;
  h4Data.textContent = cityData.hourly[4].temp;
  h5Data.textContent = cityData.hourly[5].temp;
  h6Data.textContent = cityData.hourly[6].temp;
  h7Data.textContent = cityData.hourly[7].temp;
  h8Data.textContent = cityData.hourly[8].temp;

  const h1HourlyWeatherSVG = document.getElementById('h-1-svg');
  h1HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[1].weather[0].id);
  const h2HourlyWeatherSVG = document.getElementById('h-2-svg');
  h2HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[2].weather[0].id);
  const h3HourlyWeatherSVG = document.getElementById('h-3-svg');
  h3HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[3].weather[0].id);
  const h4HourlyWeatherSVG = document.getElementById('h-4-svg');
  h4HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[4].weather[0].id);
  const h5HourlyWeatherSVG = document.getElementById('h-5-svg');
  h5HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[5].weather[0].id);
  const h6HourlyWeatherSVG = document.getElementById('h-6-svg');
  h6HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[6].weather[0].id);
  const h7HourlyWeatherSVG = document.getElementById('h-7-svg');
  h7HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[7].weather[0].id);
  const h8HourlyWeatherSVG = document.getElementById('h-8-svg');
  h8HourlyWeatherSVG.src = matchWeatherToSVG(cityData.hourly[8].weather[0].id);
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
export {
  updateUI,
  updateUnitsUI,
  UnitsManager,
  SearchManager,
  updateWeeklyUI,
  updateHourlyUI,
};
