"use strict";

const arr = ["2", "-15", "12", "83", "-29", "-111", "-6", "22"];
console.log(arr);
arr.forEach((item, index) => {
  if (item.length === 3) console.log(index);
});
console.log(
  arr.indexOf(
    arr.find(
      (item) => (item > 99 && item < 1000) || (item > -1000 && item < -99)
    )
  ),
  `трехзначное число`
);

arr.forEach((item, index) => {
  if (item % 5 === 0)
    console.log(`на ${index} позиции кратный 5 элементы равный ${item}`);
});

let positives = arr.filter((item) => item > 0);
console.log(positives, `все положительные числа из массива arr`);

const arrSortedUp = arr.sort((a, b) => a - b);
console.log(arrSortedUp, `сортировка по возрастанию`);

let goodArr = arr.map(function (item) {
  if (item < 0) {
    return Math.abs(item);
  } else return item * 2;
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
