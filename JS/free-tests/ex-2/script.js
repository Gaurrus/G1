"use strict";

const input = document.querySelectorAll("input");
const button = document.querySelector("button");

const calcSurface = (width, heigth) => {
  const result = width * heigth;
  return result;
};

const calcPerim = (width, heigth) => {
  const result = width + heigth;
  return result;
};

const checkFault = (width, heigth) => {
  if (isNaN(width) || isNaN(heigth)) {
    return true;
  } else return false;
};

button.addEventListener("click", () => {
  const resultText = document.querySelector("h2");
  if (resultText) resultText.remove();
  const width = +input[0].value;
  const heigth = +input[1].value;
  if (checkFault(width, heigth)) {
    document.body.insertAdjacentHTML("beforeend", `<h2>Ошибка!</h2>`);
  } else {
    calcSurface(width, heigth);
    calcPerim(width, heigth);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h2>Периметр ${calcPerim(width, heigth)}, Площадь ${calcSurface(
        width,
        heigth
      )}</h2>`
    );
  }
});
