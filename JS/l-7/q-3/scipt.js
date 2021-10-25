"use strict";
const button = document.getElementById("button");
const input = document.getElementById("input1");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const x = +input.value;
  const resDec = factoryDec(x);
  const resEx = factoryEx(x);
  const resStrel = factoryStrel(x);
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Факториал ${x}! равен ${resDec}</h3>`
  );
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Факториал ${x}! равен ${resEx}</h3>`
  );
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Факториал ${x}! равен ${resStrel}</h3>`
  );
});

function factoryDec(ex) {
  return ex != 1 ? ex * factoryDec(ex - 1) : 1;
}
const factoryEx = function (ex) {
  return ex != 1 ? ex * factoryEx(ex - 1) : 1;
};

const factoryStrel = (ex) => {
  return ex != 1 ? ex * factoryStrel(ex - 1) : 1;
};
