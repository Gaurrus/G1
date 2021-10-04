"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const x = input[0].value;
  const y = input[1].value;
  const z = input[2].value;
  const multy = multipler(x, y);
  const expa = foo(x,y,z);
  body.insertAdjacentHTML('beforeend', `<h3>Произведение ${x} и ${y} равно ${multy} их произвекдение в степени ${z} равно ${expa}</h3>`);
});


function multipler(ex, igrek) {
 const mUlt = ex * igrek;
 return mUlt;
}

function foo(a,b,c) {
  console.log(multipler(a,b));
  const expon = multipler(a,b) ** c;
  return expon;
}