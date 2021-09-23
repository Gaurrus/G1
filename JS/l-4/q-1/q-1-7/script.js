"use strict";
const oneTicketPrice = 15;
const tenTicketPrice = 125;
const sixteenTicketPrice = 440;
let n = +prompt('Какое количество поездок вы желаете совершить?');
if (n < 10) {
  alert(`Требуется купить ${n} билетов на одну поездку`);
} else if (n >= 10 && n < 60 && (n * oneTicketPrice) > (n * tenTicketPrice / 10) ) {
  alert(`Требуется купить ${n} билетов на 10 поездок`);
} else alert(`Купи проездной и не парься!`);
