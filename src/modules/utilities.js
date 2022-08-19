function capitalize(string) {
  string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  return string;
}
/**
 * @return {string} date
 */
function todaysDate() {
  const dateData = new Date();
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
  const min = dateData.getMinutes();

  if (String(date).slice(-1) == 1) {
    abbr = 'st';
  } else if (String(date).slice(-1) == 2) {
    abbr = 'nd';
  } else if (String(date).slice(-1) == 3) {
    abbr = 'rd';
  } else {
    abbr = 'th';
  }

  const line1Date =
    day + ',' + ' ' + date + abbr + ' ' + month + ' ' + `'` + yearAbbreviated;
  const line2Date = hour24 + ':' + min;
  const time = `${line1Date}<br />${line2Date}`;
  return time;
}

export { capitalize, todaysDate };
