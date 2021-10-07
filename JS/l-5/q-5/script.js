"use strict";
let x = +prompt("Введите подопытное число");
for (let i = 0; i <= x; i++) {
  if (x % i == 0) {
    console.log(i);
  }
}
