"use strict";

const button = document.querySelector("button");
const inputes = document.querySelectorAll("input");
let isStart = false;
let timerId;

const setTimer = (current) => {
  const timer = document.querySelector("h1");
  if (timer) timer.remove();
  document.body.insertAdjacentHTML("beforeend", `<h1>${current}</h1>`);
};

const promptNumber = (from, to) => {
  let current = from - 1;
  timerId = setInterval(() => {
    setTimer(current);
    if (current <= to) clearTimeout(timerId);
    current--;
  }, 1000);
};

const toggleButtonName = (name) => {
  button.innerHTML = name;
};

const validationNumbers = (firstNumber, lastNumber) => {
  if (!firstNumber || !lastNumber) {
    return "Пожалуйста, введите данные";
  }
  if (isNaN(firstNumber) || isNaN(lastNumber)) {
    return "Пожалуйста, введите числа, а не то что вы понаписали тут";
  }
  if (+firstNumber < +lastNumber) {
    return "Пожалуйста, введите первое число больше второго";
  }
};

const startTimer = (firstNumber, lastNumber) => {
  const error = validationNumbers(firstNumber, lastNumber);
  if (!error) {
    setTimer(+firstNumber);
    promptNumber(+firstNumber, +lastNumber);
    toggleButtonName("Пауза");
    isStart = true;
  } else {
    document.body.insertAdjacentHTML("beforeend", `<h2>${error}</h2>`);
  }
};

button.addEventListener("click", () => {
  const { value: firstNumber } = document.querySelector("#start");
  const { value: lastNumber } = document.querySelector("#end");
  const timerText = document.querySelector("h1")?.innerHTML;
  const errorBlock = document.querySelector("h2");

  if (errorBlock) errorBlock.remove();
  if (isStart) {
    clearTimeout(timerId);
    toggleButtonName("Пуск");
    isStart = false;
  } else {
    startTimer(+timerText || firstNumber, lastNumber);
  }
});

const addCloud = () => {
  button.addEventListener("pointerenter", () => {
    const cloud = document.querySelector(`h1`);
    if (cloud) {
      cloud.remove();
    } else {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `<h1 class = 'cloud-active'>запустить</h1>`
      );
    }
  });
};
