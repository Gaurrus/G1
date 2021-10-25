"use strict";
let date = new Date();
let h= date.getHours();
console.log(date);
console.log(h);

if (h < 10) {
  alert('Добрага ранку!');
} else if (h >= 10 && h <= 17) {
  alert('Добры дзень!');
} else alert ('Добры вечар!'); 

