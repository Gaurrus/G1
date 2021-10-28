"use strict";

const getWeekDay = (date) => {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
};

const date = new Date(1990, 0, 27);
console.log(getWeekDay(date));

const birthdayInThiYear = new Date(2022, 0, 27);
console.log(getWeekDay(birthdayInThiYear));

const fullAgeMillisec = new Date() - new Date(1990, 0, 27);

const agesNotFull = Math.trunc(fullAgeMillisec / 31536000000);
const bigAges = agesNotFull / 4;
console.log(
  Math.trunc(fullAgeMillisec / (31536000000 + bigAges * 24 * 3600 * 1000))
);
