'use strict'
let i = 0;
let n = +prompt("Введите число");
for (;i <= n; i += 2) {
  if (i % 5 == 0) continue; {
    console.log(i); 
  }
} 
