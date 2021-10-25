"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const paragraph = document.querySelector('h2');
  if (paragraph) paragraph.remove();
  const kash = +input[0].value;
  const price = +input[1].value;
  checkPrice(kash, price, checkPockie, checkChange);
});

function checkChange(kash, price) {
  return body.insertAdjacentHTML(
    "beforeend",
    `<h2>Поздравляю, сдача составит ${kash - price} денег</h2>`
  );
}

let checkPockie = function (kash, price) {
  return body.insertAdjacentHTML(
    "beforeend",
    ` <h2>Вам не хватает ${price - kash} денег</h2>`
  );
};

function checkPrice(kash, price, checkPockie, checkChange) {
  if (price <= kash) {
    checkChange(kash, price);
  } else checkPockie(kash, price);
};
