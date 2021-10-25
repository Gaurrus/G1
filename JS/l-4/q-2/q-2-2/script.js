"use strict";
let number = +prompt('Введите целое число от 0 до 9');
if (Number.isInteger(number) == true) {
  if (number >=0 && number <= 9) {
    if (number == 1) {
      alert('Один');
    }
    if (number == 2) {
      alert('Два');
    }
    if (number == 3) {
      alert('Три');
    }
    if (number == 4) {
      alert('Четыре');

    }
    if (number == 5) {
      alert('Пять');
    }
    if (number == 6) {
      alert('Шесть');
    }
    if (number == 7) {
      alert('Семь');
    }
    if (number == 8) {
      alert('Восемь');
    }
    if (number == 9) {
      alert('Девять');
    }
    if (number == 0) {
      alert('Ноль');
    }
  } else alert(`Число ${number} за рамками дозволенного!`);
} else alert(`Число ${number} не целое!`);

