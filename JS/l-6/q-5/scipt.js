"use strict";
const button = document.getElementById("button");
const input = document.getElementById("input");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const x = input.value;
  checkNumbers(x);
});

function checkNumbers(x) {
  if (x >= 10) {
    x = x ** 2;

    body.insertAdjacentHTML("beforeend", `<p>Результат равен ${x}<\p>`);
  }
  if (x == 8 || x == 9) {
    x = x - 1;
    body.insertAdjacentHTML("beforeend", `<p>Результат равен ${x}<\p>`);
    return x;
  }
  if (x <= 7) {
    body.insertAdjacentHTML("beforeend", `<p>${x} Меньше либо равно 7<\p>`);
    return x;
  }
}