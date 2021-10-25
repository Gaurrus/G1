"use strict";
let x = +prompt('Чісло 1');
let y = +prompt('Чісло 2');
let z = +prompt('Чісло 3');
if(x != y && y != z) {
    if (x > y && y > z) {
    alert('Чісло 1= ' + x);
  }else if (y > x && x > z) {
    alert('Чісло 2= ' + y);
  } else alert('Чісло 3= ' + z);
} else alert('Числа равны!');
