"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const x = +input[0].value;

  const y = +input[1].value;

  const summOfAlllDec = summOfAllDec(x, y);
  const summOfAlllEx = summOfAllEx(x, y);
  const summOfAlllStrel = summOfAllStrel(x, y);
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Сумма всех чисел между ${x} и ${y} равна ${summOfAlllDec}</h3>`
  );
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Сумма всех чисел между ${x} и ${y} равна ${summOfAlllEx}</h3>`
  );
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Сумма всех чисел между ${x} и ${y} равна ${summOfAlllStrel}</h3>`
  );
});

function summOfAllDec(first, second) {
  let sum = 0;
  for (let i = first; i <= second; i++) {
    sum = sum + i;
  }
  return sum;
}

const summOfAllEx = function (first, second) {
  let sum = 0;
  for (let i = first; i <= second; i++) {
    sum = sum + i;
  }
  return sum;
};

const summOfAllStrel = (first, second) => {
  let sum = 0;
  for (let i = first; i <= second; i++) {
    sum = sum + i;
  }
  return sum;
};
