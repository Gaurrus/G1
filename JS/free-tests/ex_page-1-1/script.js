"use strict";

const input = document.querySelector("input");
const button = document.querySelector("button");

const calcSurface = (side) => {
  const result = side ** 2;
  return result;
};

const calcPerim = (side) => {
  const result = side * 2;
  return result;
};

const checkFault = (side) => {
  if (isNaN(side)) {
    return true;
  } else return false;
};

button.addEventListener("click", () => {
  const resultText = document.querySelector("h2");
  if (resultText) resultText.remove();
  const side = +input.value;
  if (checkFault(side)) {
    document.body.insertAdjacentHTML("beforeend", `<h2>Ошибка!</h2>`);
  } else {
    calcSurface(side);
    calcPerim(side);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h2>Периметр ${calcPerim(side)}, Площадь ${calcSurface(side)}</h2>`
    );
  }
});
