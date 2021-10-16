"use strict";

let call = prompt(`Введите предложение`);

function checkCall() {
  if (call.length != 0) {
    if (call[call.length - 1] == "?") {
      alert("Вопросительное");
    } else if (call[call.length - 1] == "!") {
      alert("Восклицательное");
    } else if (call[call.length - 1] == ".") {
      alert("Повествовательное");
    } else alert('В конце предложения нет знака препинания!')
  } else alert("Вы ничего не ввели");
}

checkCall();
