"use strict";
let n = +prompt("Долек по вертикали");
let m = +prompt("Долек по горизонтали");
let k = +prompt("Долек требуется отломить");

switch (k) {
  case n:
    alert("По вертикали");
    break;
  case m:
    alert("По горизонтали");
    break;
  default:
    alert("Нельзя");
}
