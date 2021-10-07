"use strict";
let quest = +prompt("Введите число");
if (quest < 0) {
  alert("Отрицательное!");
} else  if (quest > 0) {
  alert("Положительное!");
} else alert('Равно нулю!');