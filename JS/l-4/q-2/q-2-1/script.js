"use strict";
const jan = 1;
const feb = 2;
const mar = 3;
const apr = 4;
const may = 5;
const jun = 6;
const jul = 7;
const aug = 8;
const sep = 9;
const oct = 10;
const now = 11;
const des = 12;
let month = prompt("Введиье месяц");
if (month == "январь" || month == "Январь") {
  month = jan;
}
if (month == "февраль" || month == "Февраль") {
  month = feb;
}
if (month == "март" || month == "Март") {
  month = mar;
}
if (month == "апрель" || month == "Апрель") {
  month = apr;
}
if (month == "май" || month == "Май") {
  month = may;
}
if (month == "июнь" || month == "Июнь") {
  month = jun;
}
if (month == "июль" || month == "Июль") {
  month = jul;
}
if (month == "август" || month == "Август") {
  month = aug;
}
if (month == "сентябрь" || month == "Сентябрь") {
  month = sep;
}
if (month == "октябрь" || month == "Октябрь") {
  month = oct;
}
if (month == "ноябрь" || month == "Ноябрь") {
  month = now;
}
if (month == "декабрь" || month == "Декабрь") {
  month = des;
}
if (
  month != 1 &&
  month != 2 &&
  month != 2 &&
  month != 4 &&
  month != 5 &&
  month != 6 &&
  month != 7 &&
  month != 8 &&
  month != 9 &&
  month != 10 &&
  month != 11 &&
  month != 12
) {
  alert(`Месяца с  именем ${month} не существует!`);
} else if (month >= 3 && month <= 5) {
  alert("Ваш месяц весной");
} else if (month >= 6 && month <= 8) {
  alert("Ваш месяц летом");
} else if (month >= 9 && month <= 11) {
  alert("Ваш месяц осенью");
} else alert("Ваш месяц зимой");
