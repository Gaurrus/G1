"use strict";
let sum = 0;

let calcNumbers = () => {
  for (let i = 1; i < 1000000; i++) {
    sum = sum++;
  }
};
let start = Date.now();
calcNumbers();
let end = Date.now();

console.log(end - start);
