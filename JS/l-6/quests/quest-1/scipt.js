"use strict";
const button = document.getElementById("button");
const input = document.getElementById("input");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const name = input.value;
  const resultOfname = helloOfName(name);
  
});

function helloOfName(myName) {
  const theName = myName;
  if (myName != 0) {
    body.insertAdjacentHTML('beforeend', `<h2>Привет ${myName}!</h2>`);
  } else body.insertAdjacentHTML('beforeend', `<h2>Привет гость!</h2>`);
}
