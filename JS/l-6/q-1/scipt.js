"use strict";
const button = document.getElementById("butt");
const input = document.getElementById("input");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const x = input.value;
  checkAge(x);
});

function checkAge(x) {
  if (x <= 16) {
    body.insertAdjacentHTML("beforeend", `<p>Еще маловат!<\p>`);
  } else body.insertAdjacentHTML("beforeend", `<p>Уже можно!<\p>`);
}