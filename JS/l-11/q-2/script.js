"use strict";

const arr = ["2", "-15", "12", "83", "-29", "111", "-6", "22"];
console.log(arr);
arr.forEach((item, index) => {
  if (item.length === 3) console.log(index);
});

arr.forEach((item, index) => {
  if (item % 5 === 0)
    console.log(`на ${index} позиции кратный 5 элементы равный ${item}`);
});

const positives = [];
const findPositives = arr.forEach((item) => {
  if (item > 0) {
    positives.push(item);
  }
});
console.log(positives, `все положительные числа из массива arr`);

const arrSortedUp = arr.sort((a, b) => a - b);
console.log(arrSortedUp, `сортировка по возрастанию`);

const goodArr = [];

const chengeArr = arr.forEach((item) => {
  if (item < 0) {
    goodArr.push(Math.abs(item));
  } else goodArr.push(item * 2);
});
console.log(goodArr, `преобразованный arr`);

const arrSortedDown = arr.sort((a, b) => b - a);
console.log(arrSortedUp, `сортировка по убыванию`);

console.log(arr.reverse(), `реверс`);

let prod = 1;
const findProd = arr.forEach((item) => (prod *= item));
console.log(prod, `произведение всех элементов`);

let mid = 0;
let summ = 0;
const calcMid = arr.forEach((item) => {
  summ = summ + +item;
});
mid = summ / arr.length;
console.log(mid, `среднее арифметическое`);
