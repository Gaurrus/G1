const calcArea = document.querySelector(`input`);
const buttonPanel = document.querySelector(".num-panel_wrapper");
let operationClicked;
let firstNumber;
let secondNumber;

const getSymbol = (event) => {
  let symbol = event.target;
  if (symbol.tagName != "BUTTON") {
    return;
  }
  let operation = symbol.innerHTML;
  calckuletion(operation);
};

buttonPanel.addEventListener("click", getSymbol);

const calckuletion = (operation) => {
  if (!isNaN(operation)) {
    calcArea.value = calcArea.value + +operation;
  }
  if (operation == "C") {
    calcArea.value = "";
  }
  if (operation == "+") {
    firstNumber = calcArea.value;
    operationClicked = operation;
    calcArea.value = "";
  }
  if (operation == "-") {
    firstNumber = calcArea.value;
    operationClicked = operation;
    calcArea.value = "";
  }
  if (operation == "*") {
    firstNumber = calcArea.value;
    operationClicked = operation;
    calcArea.value = "";
  }
  if (operation == "/") {
    firstNumber = calcArea.value;
    operationClicked = operation;
    calcArea.value = "";
  }
  if (operation == "=") {
    secondNumber = calcArea.value;
    if (operationClicked == "+") {
      calcArea.value = +firstNumber + +secondNumber;
    }
    if (operationClicked == "-") {
      calcArea.value = +firstNumber - +secondNumber;
    }
    if (operationClicked == "*") {
      calcArea.value = +firstNumber * +secondNumber;
    }
    if (operationClicked == "/") {
      calcArea.value = +firstNumber / +secondNumber;
    }
  }
  // if (operation === "delete") {
  //   calcArea.value =
  //     calcArea.value -
  //     calcArea.value[calcArea.value[calcArea.value.length]];
  // }
};
