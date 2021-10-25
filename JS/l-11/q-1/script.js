"use strict";

const fruits = ["Яблоко", "Апельсин", "Слива"];
fruits.push("Абрикос");
console.log(fruits, `абрикос`);
fruits.unshift("Нектарин", "Персик");
fruits.splice(2, 1);
console.log(fruits, `удалил яблоко`);
fruits.splice(2, 1);
console.log(fruits, `удалил апельсин`);
const favoritsFruits = fruits.slice(0, 3);
console.log(favoritsFruits, `скопировал первые три элемента`);
const berries = ["Барбарис", "Виноград", "Годжи"];
console.log(berries, `создал berries`);
let arr = fruits.concat(berries);
console.log(arr, `добавил berries к fruits`);
console.log(fruits.length, `кличество элементов fruits`);

fruits.forEach(function (item, index, array) {
  console.log(`${item} будет ${index}`);
});

console.log(fruits);

const plum = fruits.findIndex((item) => item === "Слива");

console.log(`Слива на позиции ${plum}`);

const apple = fruits.find((item) => item === "Яблоко");
if(apple === undefined) {
  console.log('Яблуков тут нема');
} else console.log(apple);
