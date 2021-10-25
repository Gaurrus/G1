"use strict";
let numOfMonth = prompt("Введите день недели");
if (
  numOfMonth == "понедельник" ||
  numOfMonth == "Понедельник" ||
  numOfMonth == "пн" ||
  numOfMonth == "Пн" ||
  numOfMonth == "ПН"
) {
  alert(`Числа месяца выпадающие на ${numOfMonth} будут 1, 8, 15, 22, 29`);
} else if (
  numOfMonth == "вторник" ||
  numOfMonth == "Вторник" ||
  numOfMonth == "вт" ||
  numOfMonth == "Вт" ||
  numOfMonth == "ВТ"
) {
  alert(`Числа месяца выпадающие на ${numOfMonth} будут 2, 9, 16, 23, 30`);
} else if (
  numOfMonth == "среда" ||
  numOfMonth == "Среда" ||
  numOfMonth == "ср" ||
  numOfMonth == "Ср" ||
  numOfMonth == "СР"
) {
  alert(`Числа месяца выпадающие на ${numOfMonth} будут 3, 10, 17, 24`);
} else if (
  numOfMonth == "четверг" ||
  numOfMonth == "Четверг" ||
  numOfMonth == "чт" ||
  numOfMonth == "Чт" ||
  numOfMonth == "ЧТ"
) {
  alert(`Числа месяца выпадающие на ${numOfMonth} будут 4, 11, 18, 25`);
} else if (
  numOfMonth == "пятница" ||
  numOfMonth == "Пятница" ||
  numOfMonth == "пт" ||
  numOfMonth == "Пт" ||
  numOfMonth == "ПТ"
) {
  alert(`Числа месяца выпадающие на ${numOfMonth} будут 5, 12, 19, 26`);
} else if (
  numOfMonth == "суббота" ||
  numOfMonth == "Суббота" ||
  numOfMonth == "сб" ||
  numOfMonth == "Сб" ||
  numOfMonth == "СБ"
) {
  alert(`Числа месяца выпадающие на ${numOfMonth} будут 6, 13, 20, 27`);
} else if (
  numOfMonth == "воскресенье" ||
  numOfMonth == "Воскресенье" ||
  numOfMonth == "вс" ||
  numOfMonth == "Вс" ||
  numOfMonth == "ВС"
) {
  alert(`Числа месяца выпадающие на ${numOfMonth} будут 7, 14, 21, 28`);
} else alert(`${numOfMonth} не существует или допущена ошибка`);
