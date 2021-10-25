"use strict";
const userName = prompt("как ваше имя?");
let param = confirm(`Ваше имя ${userName}?`);
if (param == true) {
  alert(`Ура! Ваше имя - ${userName}`);
} else alert("А жаль!");
