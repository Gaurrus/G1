"use strict";
const input = document.querySelector(`input`);
const button = document.querySelector(`button`);
const result = document.querySelector(`.result`);
const body = document.querySelector(`body`);
let list = [];
let insertPrompt;

do {
  insertPrompt = prompt(`Введите пункт списка`);
  if (insertPrompt) {
    list.push(insertPrompt);
  }
} while (insertPrompt);

const ul = document.createElement(`ul`);

list.forEach((item) => {
  ul.insertAdjacentHTML(`beforeend`, `<li>${item}</li>`);
});

body.append(ul);

// button.addEventListener(`click`, () => {
//   let listItem = input.value;
//   list.push(listItem);
//   input.value = ``;
// });

// result.addEventListener(`click`, () => {
//   list.forEach((item) => {
//     body.insertAdjacentHTML(`beforeend`, `<li>${item}</li>`);
//   });
// });
