
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const days = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

export const getMonth = (date) => {
  return months[date.getMonth()];
}

export const getYear = (date) => {
  return date.getFullYear();
}

export const getDay = (date) => {
  return date.getDate();
}

export const getDays = (date) => {
  const year = getYear(date);
  const month = date.getMonth();

  return 32 - new Date(year, month, 32).getDate();
}

export const getStartingDay = (date) => {
  const year = getYear(date);
  const month = date.getMonth();

  return (new Date(year, month, 1)).getDay();
}