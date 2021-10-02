"use strict";
let sum = 0;
let n = +prompt("На что хотим делить?");
for (let i = 10; i <= 99; i++) {
  sum = (i - i % 10) / 10 + i % 10;
  if (sum % n == 0) {
    console.log(i);
  }
}
