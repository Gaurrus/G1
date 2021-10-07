"use strict";
let i = 1;
let n = 0;
let num = null;
for (i = 1; i <= 10; i++) {
  num = +prompt("Введите число");
  if (num != 0) {
    n = n + num;
  } else i = 10;
}
alert(`Сумма введенных чисел ${n}`);
