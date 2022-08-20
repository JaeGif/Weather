function capitalize(string) {
  let capitalized = string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
  return capitalized;
}
/**
 * @return {string} date
 */
function todaysDate(cityData) {
  const localOffset = new Date().getTimezoneOffset() * 60;
  const dt =
    (cityData.current.dt + localOffset + cityData.timezone_offset) * 1000;
  const dateData = new Date(dt);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = days[dateData.getDay()];
  const date = dateData.getDate();
  let abbr = '';
  const month = months[dateData.getMonth()];
  const yearFull = String(dateData.getFullYear());
  const yearAbbreviated = yearFull[2] + yearFull[3];
  const hour24 = dateData.getHours();
  let min = String(dateData.getMinutes());

  // correct date suffix matching
  if (String(date).slice(-1) == 1) {
    abbr = 'st';
  } else if (String(date).slice(-1) == 2) {
    abbr = 'nd';
  } else if (String(date).slice(-1) == 3) {
    abbr = 'rd';
  } else {
    abbr = 'th';
  }

  // correct time
  if (min.length < 2) {
    min = '0' + min;
  }

  const line1Date =
    day + ',' + ' ' + date + abbr + ' ' + month + ' ' + `'` + yearAbbreviated;
  const line2Date = hour24 + ':' + min;
  const time = `${line1Date}<br />${line2Date}`;
  return time;
}

function matchWeatherToSVG(weatherCode) {
  let URL = '';

  switch (String(weatherCode)[0]) {
    case '2':
      URL = './assets/svg/severe-thunderstorm.svg';
    case '3':
      URL = './assets/svg/drizzle.svg';
    case '5':
      URL = './assets/svg/rain-1.svg';
    case '6':
      if (
        String(weatherCode) === '612' ||
        String(weatherCode) === '613' ||
        String(weatherCode) === '615' ||
        String(weatherCode) === '616'
      ) {
        URL = './assets/svg/rain-and-snow.svg';
      } else {
        URL = './assets/svg/snow.svg';
      }
    case '7':
      if (
        String(weatherCode) === '701' ||
        String(weatherCode) === '711' ||
        String(weatherCode) === '721' ||
        String(weatherCode) === '741' ||
        String(weatherCode) === '751' ||
        String(weatherCode) === '761' ||
        String(weatherCode) === '731'
      ) {
        URL = './assets/svg/mist.svg';
      } else {
        URL = './assets/svg/tornado-2.svg';
      }
    case '8':
      if (String(weatherCode) === '800') {
        URL = './assets/svg/sun-horizon-1.svg';
      } else {
        URL = './assets/svg/mostly-cloudy-2.svg';
      }
  }
  return URL;
}
export { capitalize, todaysDate, matchWeatherToSVG };
