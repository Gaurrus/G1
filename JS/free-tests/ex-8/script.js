"use strict";

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
let max;
let arrOfnumberOne = [];
let arrOfnumberTwo = [];
const checkNumbers = (numberOne, numberTwo) => {
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    inputs.forEach((item) => {
      item.value = `Ошибка!`;
      return true;
    });
  } else return false;
};

const findMax = (numberOne, numberTwo) => {
  let max;
  if (numberOne > numberTwo) {
    max = numberOne;
  } else {
    max = numberTwo;
  }
  return max;
};

const findDividersOfOne = (numberOne, numberTwo) => {
  for (let i = 1; i <= findMax(numberOne, numberTwo); i++) {
    if (numberOne % i == 0) {
      arrOfnumberOne.push(i);
    }
  }
};

const findDividersOfTwo = (numberOne, numberTwo) => {
  for (let i = 1; i <= findMax(numberOne, numberTwo); i++) {
    if (numberTwo % i == 0) {
      arrOfnumberTwo.push(i);
    }
  }
};

const compareArraysOfNum = () => {
  let arrLengthMax;
  if (arrOfnumberOne.length > arrOfnumberTwo.length) {
    arrLengthMax = arrOfnumberOne.length;
  } else {
    arrLengthMax = arrOfnumberTwo.length;
  }
  for (let i = 0; i <= arrLengthMax - 1; i++) {
    if (arrOfnumberOne[i] == arrOfnumberTwo[i]) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<h2>${arrOfnumberOne[i]}</h2>`
      );
    }
  }
};

button.addEventListener("click", () => {
  arrOfnumberOne = [];
  arrOfnumberTwo = [];
  removeText();
  const numberOne = +inputs[0].value;
  const numberTwo = +inputs[1].value;
  if (checkNumbers(numberOne, numberTwo)) {
    return;
  } else {
    findDividersOfOne(numberOne, numberTwo);
    findDividersOfTwo(numberOne, numberTwo);
    console.log(arrOfnumberOne);
    console.log(arrOfnumberTwo);
    compareArraysOfNum();
  }
});

inputs.forEach((item) => {
  item.addEventListener("focus", () => {
    item.value = "";
  });
});

const removeText = () => {
  const text = document.querySelectorAll("h2");
  text.forEach((element) => {
    if (element) element.remove();
  });
};

// const printResult = (number) => {
//   document.body.insertAdjacentHTML(
//     "beforeend",
//     `<h2>${}<h2>`
//   );
// };
