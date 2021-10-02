"use strict";
let num = 0;
let n = +prompt("Введите число");
for (let i = 0; i <= n; ++i) {
  num = i * 2;
  if (num == 0) continue;
  {
    if (num % 10 != 0) {
      console.log(num);
    } else n++;
  }
}
