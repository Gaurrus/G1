"use strict";

const input = document.querySelectorAll("input");
const button = document.querySelector("button");

const checkNumbers = (first, second, third) => {
  if (
    isNaN(first) ||
    isNaN(second) ||
    isNaN(third) ||
    first == 0 ||
    second == 0 ||
    third == 0
  ) {
    return true;
  } else {
    return false;
  }
};

const checkTheTriangle = (first, second, third) => {
  if (
    first + second > third &&
    first + third > second &&
    second + third > first
  ) {
    return false;
  } else return true;
};

const printResult = (first, second, third) => {
  let resultText = document.createElement("h2");
  resultText.innerHTML = `Площадь треугольника - ${calcTriangleSquare(
    first,
    second,
    third
  )}`;
  document.body.append(resultText);
};

const removeText = () => {
  const text = document.querySelector("h2");
  if (text) text.remove();
};

const calcTriangleSquare = (first, second, third) => {
  const semiPerim = (first + second + third) / 2;
  const result = Math.sqrt(
    semiPerim * (semiPerim - first) * (semiPerim - second) * (semiPerim - third)
  );
  return result;
};

button.addEventListener("click", () => {
  removeText();
  const first = +input[0].value;
  const second = +input[1].value;
  const third = +input[2].value;
  if (
    checkNumbers(first, second, third) ||
    checkTheTriangle(first, second, third)
  ) {
    document.body.insertAdjacentHTML(`beforeend`, `<h2>Ошибка!</h2>`);
  } else {
    calcTriangleSquare(first, second, third);
    printResult(first, second, third);
  }
});
