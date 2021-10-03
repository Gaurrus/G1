"use strict";
const button = document.getElementById("button");
const input = document.getElementById("input");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const radius = input.value;
  const calcLenghtOfCircle = calcCircleLenght(radius);
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Длинна окружности радиусом ${radius} равна ${calcLenghtOfCircle}<\h3>`
  );
});

function calcCircleLenght(raDius) {
  const lenght = 2 * Math.PI * raDius;
  return lenght;
}
