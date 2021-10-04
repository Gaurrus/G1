"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const x = input[0].value;
  const y = input[1].value;
  const multy = multipler(x, y);
  body.insertAdjacentHTML('beforeend', `<h3>Произведение ${x} и ${y} равно ${multy}</h3>`);
});


function multipler(ex, igrek) {
 const mUlt = ex * igrek;
 return mUlt;
}