"use strict";

class Clock {
  constructor() {
    this.timerId;
  }

  setTime(num) {
    if (num > 9) {
      return num;
    }
    return `${num}`;
  }

  setClock() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const timer = document.querySelector("h1");
    if (timer) timer.remove();
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1>${this.setTime(hours)}:${this.setTime(minutes)}:${this.setTime(
        seconds
      )}</h1>`
    );
  }

  start() {
    this.setClock();
    this.timerId = setInterval(() => this.setClock(), 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }
}

const clock = new Clock();

const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");

startButton.addEventListener("click", () => clock.start());
endButton.addEventListener("click", () => clock.stop());

("use strict");

const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");

class Timer {
  constructor() {
    this.timerId;
  }

  #setTimer(current) {
    const timerBlock = document.querySelector("h1");
    if (timerBlock) timerBlock.remove();
    document.body.insertAdjacentHTML("beforeend", <h1>${current}</h1>);
  }

  #validationNumbers(firstNumber, lastNumber) {
    if (!firstNumber || !lastNumber) {
      return "Пожалуйста, введите данные";
    }
    if (isNaN(firstNumber) || isNaN(lastNumber)) {
      return "Пожалуйста, введите числа, а не то что вы понаписали тут";
    }
    if (+firstNumber < +lastNumber) {
      return "Пожалуйста, введите первое число больше второго";
    }
  }

  #clearError() {
    const errorBlock = document.querySelector("h2");
    if (errorBlock) errorBlock.remove();
  }

  start(from, to) {
    const error = this.#validationNumbers(from, to);
    if (!error) {
      this.#clearError();
      this.#setTimer(from);
      let current = from - 1;
      this.timerId = setInterval(() => {
        this.#setTimer(current);
        if (current <= to) {
          setTimeout(() => {
            this.#setTimer("ВСЁ!!!");
            this.stop();
          }, 1000);
        }
        current--;
      }, 1000);
    } else {
      this.#clearError();
      document.body.insertAdjacentHTML("beforeend", <h2>${error}</h2>);
    }
  }

  stop() {
    clearInterval(this.timerId);
  }
}

const timer = new Timer();

startButton.addEventListener("click", () => {
  const timerBlock2 = document.querySelector("h1");
  const startInput = timerBlock2
    ? timerBlock2.innerHTML
    : document.querySelector("#startInput").value;
  const endInput = document.querySelector("#endInput").value;
  timer.start(+startInput, +endInput);
});

endButton.addEventListener("click", () => {
  timer.stop();
});
