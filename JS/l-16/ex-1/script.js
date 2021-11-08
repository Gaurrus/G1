"use strict";

const inputes = document.querySelectorAll(`.input`);
console.log(inputes);
const button = document.querySelector(`button`);
console.log(inputes[0].value);
button.addEventListener(`click`, () => {
  const first = +inputes.value[0];
  console.log(inputes[0].value);
  const second = inputes.value[1];

  let current = from;
  const timerId = setInterval(() => {
    const remove = document.querySelector(`h1`);
    if (from <= to) {
      document.body.insertAdjacentHTML(`beforeend`, `<h1>${timeout}</h1>`);
    }
    clearInterval(timerId);
  }, 1000);
});
