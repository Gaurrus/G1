"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const x = input[0].value;
  const y = input[1].value;
  const expOnenta = exponention(x, y);
  body.insertAdjacentHTML('beforeend', `<h3>Число ${x} в степени ${y} равно ${expOnenta}</h3>`);
});


function exponention(ex, igrek) {
 const exponent = ex ** igrek;
 return exponent;
}