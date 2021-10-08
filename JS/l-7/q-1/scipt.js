"use strict";
const button = document.getElementById("button");
const input = document.getElementById("input1");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  // const h3 = document.querySelector("h3");
  // if (h3) h3.remove();
  const gradus = +input.value;
  const resultRadsDec = gradToRadDec(gradus);
  const resultRadsEx = gradToRadEx(gradus);
  const resultRadsStrel = gradToRadStrel(gradus);
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Перевод в рады равен ${resultRadsDec} Declaration</h3>`
  );
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Перевод в рады равен ${resultRadsEx} Expression</h3>`
  );
  body.insertAdjacentHTML(
    "beforeend",
    `<h3>Перевод в рады равен ${resultRadsStrel} =></h3>`
  );
});

function gradToRadDec(gra) {
  const rads = (gra * Math.PI) / 180;
  return rads;
}

const gradToRadEx = function (gra) {
  const rads = (gra * Math.PI) / 180;
  return rads;
};

const gradToRadStrel = (gra) => {
  const rads = (gra * Math.PI) / 180;
  return rads;
};


