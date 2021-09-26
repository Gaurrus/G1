"use strict";
const oneTicketPrice = 15; //стоимость n поезки
const tenTicketPrice = 125; // стоимость 10n поездок
const sixteenTicketPrice = 440; // стоимость 60n поездки
let n = +prompt("Какое количество поездок вы желаете совершить?");
let n10 = (n - (n % 10)) / 10; //вычисление количества целых билетов на 10 поездок
let n1 = n % 10; // остаток от десяти поездок
let n60 = (n - (n % 60)) / 60; ////вычисление количества целых билетов на 60 поездок
let n6 = n % 60; // остаток от 60 поездок
let n6_10 = (n6 - (n6 % 10)) / 10; // целое количество 10 в остатке от 60
let n6_1 = n6 % 10; // поиск остатка от остатка от 60
console.log(`${n} количество поездок`);
console.log(`${n10} количества целых билетов на 10 поездок`);
console.log(`${n1} количество одиночных билетов если больше 10`);
console.log(`${n60} количества целых билетов на 60 поездок`);
console.log(`${n6_10} количество целых билетов на 10 поездок если выше 60`);
console.log(`${n6_1} количество целых билетов на 1 поездку если выше 60`);
console.log(n10 * tenTicketPrice + " стоимость целых 10 билетных поездок");
console.log(
  n10 * tenTicketPrice +
    n1 * oneTicketPrice +
    " стоимость целых 10 билетных поездок с остатком"
);
console.log(2 * sixteenTicketPrice + " стоимость 2х билетов на 60 поездок");
console.log(
  n60 * sixteenTicketPrice + " стоимость целых билетов на 60 поездок"
);
console.log(
  n60 * sixteenTicketPrice +
    n6_10 * tenTicketPrice +
    " стоимость целых билетов на 60 поездок и целых на 10 поездок"
);
console.log(
  n60 * sixteenTicketPrice +
    n6_10 * tenTicketPrice +
    n6_1 * oneTicketPrice +
    " стоимость целых билетов на 60 поездок и целых на 10 поездок и одиночных билетов"
);

if (n < 10) {
  alert(`Требуется купить ${n} билет(а)(ов) на одну поездку`);
} else if (
  n >= 10 &&
  n < 60 &&
  n10 * tenTicketPrice < sixteenTicketPrice &&
  n10 * tenTicketPrice + n1 * oneTicketPrice < sixteenTicketPrice
) {
  if (n1 == 0) {
    alert(`Требуется купить ${n10} билет(а)(ов) на 10 поездок`);
  } else
    alert(
      `Требуется купить ${n10} билет(а)(ов) на 10 поездок и ${n1} билет(а)(ов) на 1 поездку`
    );
} else if (
  n >= 60 &&
  n60 * sixteenTicketPrice < 2 * sixteenTicketPrice &&
  n60 * sixteenTicketPrice + n6_10 * tenTicketPrice < 2 * sixteenTicketPrice &&
  n60 * sixteenTicketPrice + n6_10 * tenTicketPrice + n6_1 * oneTicketPrice <
    2 * sixteenTicketPrice
) {
  if (n6_1 == 0 && n6_10 == 0) {
    alert(`Требуется купить ${n60} билет(а)(ов) на 60 поездок.`);
  } else if (n6_10 == 0) {
    alert(
      `Требуется купить ${n60} билет(а)(ов) на 60 поездок и ${n6_1} билет(а)(ов) на 1 поездку.`
    );
  } else if (n6_1 == 0) {
    alert(
      `Требуется купить ${n60} билет(а)(ов) на 60 поездок и ${n6_10} билет(а)(ов) на 10 поездок.`
    );
  } else
    alert(
      `Требуется купить ${n60} билет(а)(ов) на 60 поездок, ${n6_10} билет(а)(ов) на 10 поездок и ${n6_1} билет(а)(ов) на 1 поездку`
    );
} else alert(`Купи проездной на 60 - закончится купишь еще!`);
