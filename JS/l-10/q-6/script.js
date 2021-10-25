"use strict";

const input = document.getElementById("input");
const button = document.getElementById("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  const str = input.value;
  if (str != 0) {
    let result = checkPolindromus(str);
    body.insertAdjacentHTML("beforeend", `<h2>${result}</h2>`);
  } else body.insertAdjacentHTML("beforeend", `<h2>Вы ничего не ввели!</h2>`);
});

let checkPolindromus = (str) => {
  let resultOfCheck;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == str[str.length - (i + 1)]) {
      resultOfCheck = 1;
    } else return `Введенное слово НЕ палиндром`;
  }
  if (resultOfCheck == 1) {
    return `Введенное слово палиндром`;
  }
};
