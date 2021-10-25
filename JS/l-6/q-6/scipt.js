"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const divisible = input[0].value;
  const divider = input[1].value;
  const resultOfDivision = calcOfNoFullDivision(divisible, divider);
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Делимое состоит из ${resultOfDivision} цифер</h3>`
  );
});

function calcOfNoFullDivision(aaa, bbb) {
  const reminder = aaa % bbb;
  const notFullDivision = (aaa - reminder) / bbb;
  console.log(notFullDivision);
}
