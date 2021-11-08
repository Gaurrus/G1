"use strict";

const input = document.querySelector(`.input`);

const inputValue = () => {
  input.value = +input.value + 1;
  if (input.value == 1000) {
    clearInterval(intervalId);
    input.value = `Stopped`;
  }
};

const intervalId = setInterval(inputValue, 1000);
