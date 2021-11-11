"use strict";

const input = document.querySelectorAll(`.input`);
const button = document.querySelector(`.button`);

const counter = () => {
  const from = +input[0].value;
  const to = +input[1].value;
  let count = from;
  checkNumbers(from, to);
  checkIsNums(from, to);

  const timerId = setInterval(() => {
    if (count >= to + 1) {
      count--;
      printTimer(count);
    } else clearInterval(timerId);
  }, 500);
};

button.addEventListener(`click`, counter);

const printTimer = (count) => {
  if (document.querySelector("h1")) {
    document.querySelector("h1").remove();
  }
  document.body.insertAdjacentHTML("beforeend", `<h1>${count}</h1>`);
};

const checkNumbers = (from, to) => {
  if (to > from) {
    return document.body.insertAdjacentHTML(
      "beforeend",
      `<h1>Второе число больше первого, такой счетчик невозможен!</h1>`
    );
  }
};

const checkIsNums = (from, to) => {
  if (document.body.querySelector(`h1`)) {
    document.body.querySelector(`h1`).remove();
  }
  if (isNaN(from)) {
    return document.body.insertAdjacentHTML(
      "beforeend",
      `<h1>Первое не число!</h1>`
    );
  }
  if (isNaN(to)) {
    return document.body.insertAdjacentHTML(
      "beforeend",
      `<h1>Второе не число!</h1>`
    );
  }
};
