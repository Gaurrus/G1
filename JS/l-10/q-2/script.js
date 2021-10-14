"use strict";

let call = prompt(`Введите предложение`);

function checkCall() {
  if (call.length != 0) {
    if (call[call.length - 1] == "?") {
      alert("Вопросительное");
    } else if (call[call.length - 1] == "!") {
      alert("Восклицательное");
    } else alert("Повествовательное");
  } else alert("Вы ничего не ввели");
}

checkCall();
