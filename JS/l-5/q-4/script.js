"use strict";
let sum = 0;
let n = +prompt("Введите до скольки считать?");
for (let i = 0; i <= n; i++) {
  sum += i; 
}
alert(`Сумма всех чисел от "0" до ${n} равна ${sum}`);
