"use strict";

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

const checkNumbers = (first, second, third) => {
  if (isNaN(first) || isNaN(second) || isNaN(third)) {
    for (let item of inputs) {
      item.value = `Ошибка!`;
    }
    return true;
  } else return false;
};

const firndRoots = (first, second, third) => {
  let resultOne;
  let resultTwo;
  const discriminant = second ** 2 - 4 * first * third;
  if (discriminant > 0) {
    resultOne =
      ((second + Math.sqrt(second ** 2 - 4 * first * third)) / 2) * first;
    resultTwo =
      ((-second - Math.sqrt(second ** 2 - 4 * first * third)) / 2) * first;
    return printResult(resultOne, resultTwo);
  }
  if (discriminant == 0) {
    resultOne = -second / (2 * first);
    resultTwo = resultOne;
    return printResult(resultOne, resultTwo);
  }
  if (discriminant < 0) resultOne = undefined;
  resultTwo = undefined;
  return printResult(resultOne, resultTwo);
};

button.addEventListener("click", () => {
  removeText();
  const first = +inputs[0].value;
  const second = +inputs[1].value;
  const third = +inputs[2].value;
  checkNumbers(first, second, third);
  if (checkNumbers(first, second, third)) {
    return;
  } else {
    firndRoots(first, second, third);
  }
});

inputs.forEach((element) => {
  element.addEventListener("focus", () => {
    element.value = "";
  });
});

const removeText = () => {
  const text = document.querySelector("h2");
  if (text) text.remove();
};

const printResult = (resultOne, resultTwo) => {
  if (resultTwo != undefined && resultOne != undefined) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h2>Корень 1 - ${resultOne} корень -2 ${resultTwo}<h2>`
    );
  } else {
    document.body.insertAdjacentHTML("beforeend", `<h2>Корней нет!<h2>`);
  }
};
