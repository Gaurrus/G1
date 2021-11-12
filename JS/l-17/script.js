"use strict";

const input = document.querySelectorAll(`.input`);
const button = document.querySelector(`.button`);

const counter = (from, to) => {
  let count = from;
  const timerId = setInterval(() => {
    if (count >= to && button.textContent == "Stop") {
      printTimer(count);
      count--;
    } else {
      printTimer(count + 1);
      clearInterval(timerId);
    }
  }, 250);
};

button.addEventListener(`click`, () => {
  const from = +input[0].value;
  const to = +input[1].value;
  checkNumbers(from, to);
  checkIsNums(from, to);
  if (button.textContent == "Stop") {
    changeButtonStart();
  } else {
    changeButtonStop();
    counter(from, to);
  }
});

const printTimer = (count) => {
  if (document.querySelector("h1")) {
    document.querySelector("h1").remove();
  }
  document.body.insertAdjacentHTML("beforeend", `<h1>${count}</h1>`);
  return count;
};


const checkNumbers = (from, to) => {
  if (to > from) {
    return document.body.insertAdjacentHTML(
      "beforeend",
      `<h1>Второе число больше первого, такой отсчет невозможен!</h1>`
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

const changeButtonStart = () => {
  button.textContent = "Start";
};

const changeButtonStop = () => {
  button.textContent = "Stop";
};
