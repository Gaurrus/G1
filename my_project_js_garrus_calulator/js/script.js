const calcArea = document.querySelector(`input`);
const numberButtons = document.querySelectorAll(`.number-button`);
const operationButtons = document.querySelectorAll(`.operation-button`);
const resultButton = document.querySelector(`.result`);
const inputValue = [];

const getNumber = () => {
  const clickedNumButton = event.currentTarget;
  const numberClicked = +clickedNumButton.innerHTML;
  numberButtons.textContent = numberClicked;
  calcArea.value = calcArea.value + numberClicked;
};

for (let i = 0; i <= numberButtons.length - 1; i++) {
  numberButtons[i].addEventListener("click", getNumber);
}

const getOperation = () => {
  const clickedOperButton = event.currentTarget;
  const operationClicked = clickedOperButton.innerHTML;
  operationButtons.textContent = operationClicked;
  inputValue.push(+calcArea.value);
  calcArea.value = ``;
  console.log(inputValue);
  return operationClicked;
};

for (let i = 0; i <= operationButtons.length - 1; i++) {
  operationButtons[i].addEventListener("click", getOperation);
}

// function calcResult(operationClicked) {
//   inputValue.push(+calcArea.value);
//   if (operationClicked == `+`) {
//     result = inputValue[0] + inputValue[1];
//     console.log(result);
//   }
//   if (operationClicked === `-`) {
//     const result = numOne - numTwo;
//     console.log(result);
//   }
//   if (operationClicked === `*`) {
//     const result = numOne * numTwo;
//     console.log(result);
//   }
//   if (operationClicked === `/`) {
//     const result = numOne / numTwo;
//     console.log(result);
//   }
// }

resultButton.addEventListener("click", (operationClicked) => {
  inputValue.push(+calcArea.value);
  console.log(inputValue);
  console.log(operationClicked, `operation`);
  if (operationClicked === `+`) {
    const result = inputValue[0] + inputValue[1];
    console.log(result);
  }
  if (operationClicked === `-`) {
    const result = inputValue[0] - inputValue[1];
    console.log(result);
  }
  if (operationClicked === `*`) {
    const result = inputValue[0] * inputValue[1];
    console.log(result);
  }
  if (operationClicked === `/`) {
    const result = inputValue[0] / inputValue[1];
    console.log(result);
  }
});
