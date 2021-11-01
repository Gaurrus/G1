"use strict";

const list = document.querySelector(`#languages`);
console.log(list);
list.hidden = true;
const fullFunction = document.querySelectorAll(`ol>li:first-of-type ol>li`);
console.log(fullFunction);

fullFunction.forEach((item) => {
  document.body.insertAdjacentHTML(`beforeend`, `<p> ${item.textContent} </p>`);
});

const notFullFunction = document.querySelectorAll(`ol>li:last-of-type ol>li`);
console.log(notFullFunction);

document.body.insertAdjacentHTML(`beforeend`, `<hr>`)

notFullFunction.forEach((item) => {
  document.body.insertAdjacentHTML(`beforeend`, `<p> ${item.textContent} </p>`);
});
