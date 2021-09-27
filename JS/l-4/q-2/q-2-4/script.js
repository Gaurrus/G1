'use strict'
let n = +prompt("Что вам поставил преподаватель?");
switch (n) {
  case 1:
    alert("Плохо - родителей в школу");
    break;
  case 2:
    alert("Неуд - родителей в школу");
    break;
  case 3:
    alert("Удовлетворительно - во всёравно родителей в школу!");
    break;
  case 4:
    alert("Хорошо");
    break;
  case 5:
    alert("Отлично");
    break;
  default:
    alert(`Дедушка Ленин завещал учиться, учиться, учиться!`);
}
