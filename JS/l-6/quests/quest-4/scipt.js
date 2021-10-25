"use strict";
const button = document.getElementById("button");
const input = document.getElementsByTagName("input");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const x = +input[0].value;
  console.log(x);
  const y = +input[1].value;
  console.log(y);
  const z = +input[2].value;
  console.log(z);
  const ave = average(x, y, z);
  body.insertAdjacentHTML('beforeend', `<h3>Среднее арифметическое значение между ${x}, ${y} и ${z} равно ${ave}</h3>`);
});


function average(ex, igrek, zed) {
 const resultOfAverage = (ex + igrek + zed) / 3;
 return resultOfAverage;
}

