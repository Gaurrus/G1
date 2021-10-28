"use strict";

let inputFirst = document.getElementById("input-first");
const inputSecond = document.getElementById("input-second");
const buttonReset = document.getElementById("button-reset");
const div = document.querySelector("div");
const arrButtonsOperation = document.getElementsByClassName("button-operation");
const arrButtonsNumberred = document.getElementsByClassName("number-button");

const removeHeading = () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
};

const calcOnClick = (operation) => {
  const numOne = +inputFirst.value;
  const numTwo = +inputSecond.value;

  if (operation == `+`) {
    removeHeading();
    const result = numOne + numTwo;
    div.insertAdjacentHTML("beforeend", `<h2>${result}</h2>`);
  }
  if (operation === `-`) {
    removeHeading();
    const result = numOne - numTwo;
    div.insertAdjacentHTML("beforeend", `<h2>${result}</h2>`);
  }
  if (operation === `*`) {
    removeHeading();
    const result = numOne * numTwo;
    div.insertAdjacentHTML("beforeend", `<h2>${result}</h2>`);
  }
  if (operation === `/`) {
    removeHeading();
    const result = numOne / numTwo;
    div.insertAdjacentHTML("beforeend", `<h2>${result}</h2>`);
  }
};

const operationButtonClick = () => {
  const clickedButton = event.currentTarget;
  const operation = clickedButton.innerHTML;
  calcOnClick(operation);
};

for (let i = 0; i <= arrButtonsOperation.length - 1; i++) {
  arrButtonsOperation[i].addEventListener("click", operationButtonClick);
}

const numberedButtonClick = () => {
  const clickedNumButton = event.currentTarget;
  const numberClicked = clickedNumButton.innerHTML;
  arrButtonsNumberred.textContent = +numberClicked;
  console.log(numberClicked);
};

for (let i = 0; i <= arrButtonsNumberred.length - 1; i++) {
  arrButtonsNumberred[i].addEventListener("click", numberedButtonClick);
}

buttonReset.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  inputFirst.value = "";
  inputSecond.value = "";
  div.insertAdjacentHTML("beforeend", `<h2>Равно</h2>`);
});
