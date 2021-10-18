"use strict";

const fruits = ["Яблоко", "Апельсин", "Слива"];
fruits.push("Абрикос");
fruits.unshift("Нектарин", "Персик");
fruits.splice(2, 1);
fruits.splice(3, 1);
const favoritsFruits = fruits.slice(0, 3);
const berries = ["Барбарис", "Виноград", "Годжи"];
let arr = fruits.concat(berries);
console.log(fruits.length);
console.log(arr);
fruits.forEach(function (item, index, array) {
  console.log(`${item} будет ${index}`);
});

console.log(fruits);
const apple = fruits.find((item, index, array) => index);

console.log(apple);
