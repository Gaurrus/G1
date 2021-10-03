"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");
function calcMin(a, b, c) {
  let minNum = a;
  if (minNum > b) {
    minNum = b;
  }
  if (minNum > c) {
    minNum = c;
  }
  return minNum;
}
button.addEventListener("click", () => {
  const x1 = input[0].value;
  const x2 = input[1].value;
  const x3 = input[2].value;
  const endsMin = calcMin(x1, x2, x3);
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Минимальное из введенных - число ${endsMin}<\h3>`
  );
});
