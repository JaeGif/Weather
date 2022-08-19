function capitalize(string) {
  string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  return string;
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

export { capitalize, todaysDate };
