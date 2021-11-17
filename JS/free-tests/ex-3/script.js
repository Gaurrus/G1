"use strict";

const input = document.querySelector("input");
const button = document.querySelector("button");

const calcSquareCircle = (radius) => {
  const result = 3.14 * radius ** 2;
  return result;
};

const calcLengthCircle = (radius) => {
  const result = 2 * 3.14 * radius;
  return result;
};

const checkFault = (radius) => {
  if (isNaN(radius)) {
    return true;
  } else {
    false;
  }
};

button.addEventListener("click", () => {
  const resultText = document.querySelector("h2");
  if (resultText) resultText.remove();
  const radius = +input.value;
  if (checkFault(radius)) {
    document.body.insertAdjacentHTML("beforeend", `<h2>Ошибка!</h2>`);
  } else {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h2>Длина окружности - ${calcLengthCircle(
        radius
      )}, площадь круга - ${calcSquareCircle(radius)}</h2>`
    );
  }
});
