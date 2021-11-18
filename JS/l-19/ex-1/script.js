"use strict";

const startInput = document.querySelector("#start-input");
const endInput = document.querySelector("#end-input");
const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");

class Timer {
  constructor() {
    this.timerId;
  }
  #setTimer(current) {
    const timer = document.querySelector("h1");
    if (timer) timer.remove();
    document.body.insertAdjacentHTML("beforeend", `<h1>${current}</h1>`);
  }

  start(from, to) {
    let current = from - 1;
    this.timerId = setInterval(() => {
      this.#setTimer(current);
      if (current <= to) clearTimeout(timerId);
      current--;
    }, 1000);
  }

  stop() {
    clearInterval(timerId);
  }
}

const timer = new Timer();

startButton.addEventListener("click", () => {
  const startInput = document.querySelector("#start-input").value;
  const endInput = document.querySelector("#end-input").value;

  timer.start(startInput, endInput);
});
endButton.addEventListener("click", () => {
  timer.stop();
});
