"use strict";

const inputs = document.querySelector("input");
const button = document.querySelector("button");

const checkNumber = (number) => {
  if (isNaN(number)) {
    inputs.value = `Ошибка!`;
    return true;
  } else return false;
};

const findDividers = (number) => {
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      document.body.insertAdjacentHTML("beforeend", `<h2>${i}<h2>`);
    }
  }
};

button.addEventListener("click", () => {
  removeText();
  const number = +inputs.value;
  if (checkNumber(number)) {
    return;
  } else {
    findDividers(number);
  }
});

inputs.addEventListener("focus", () => {
  inputs.value = "";
});

const removeText = () => {
  const text = document.querySelectorAll("h2");
  text.forEach((element) => {
    if (element) element.remove();
  });
};

// const printResult = (number) => {
//   document.body.insertAdjacentHTML(
//     "beforeend",
//     `<h2>${}<h2>`
//   );
// };
