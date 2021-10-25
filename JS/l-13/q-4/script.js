"use strict";

"use strict";

const input = document.getElementById(`input`);
const button = document.getElementById(`button`);
const body = document.querySelector(`body`);

button.addEventListener(`click`, () => {
  const heading = document.querySelector(`h2`);
  if (heading) heading.remove();
  const days = +input.value;
  const result = checkWatsDate(days);
  body.insertAdjacentHTML(
    `beforeend`,
    `<h2>Через ${days} дней будет ${result.getDate()}.${
      result.getMonth() + 1
    }.${result.getFullYear()}</h2>`
  );
});

const checkWatsDate = (needdetDay) => {
  const someDate = +new Date() + +new Date(needdetDay * 24 * 3600 * 1000);
  return new Date(someDate);
};
