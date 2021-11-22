"use strict";

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

const checkNumbers = (first, second, third) => {
  if (
    isNaN(first) ||
    isNaN(second) ||
    isNaN(third) ||
    (first == 0 && second == 0 && third == 0) ||
    first == "" ||
    second == "" ||
    third == ""
  ) {
    for (let item of inputs) {
      item.value = `Ошибка!`;
    }
    return true;
  } else return false;
};

const checkToPifagor = (first, second, third) => {
  let max = first;
  if (max < second) {
    max = second;
  }
  if (max < third) {
    max = third;
  }
  if (max == first) {
    if (first ** 2 == second ** 2 + third ** 2) {
      return true;
    } else return false;
  }
  if (max == second) {
    if (second ** 2 == first ** 2 + third ** 2) {
      return true;
    } else return false;
  }
  if (max == third) {
    if (third ** 2 == first ** 2 + second ** 2) {
      return true;
    } else return false;
  }
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
    checkToPifagor(first, second, third);
    if (checkToPifagor(first, second, third)) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<h2>Числа являются тройкоф Пифагора</h2>`
      );
    } else {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<h2>Числа не являются тройкоф Пифагора</h2>`
      );
    }
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
  removeText();
  if (resultTwo != undefined && resultOne != undefined) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h2>Корень 1 - ${resultOne} корень -2 ${resultTwo}<h2>`
    );
  } else {
    document.body.insertAdjacentHTML("beforeend", `<h2>Корней нет!<h2>`);
  }
};
