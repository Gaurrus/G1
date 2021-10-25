"use strict";

const experience = {
  Kolia: 20,
  Vasia: 2,
  Petia: 12,
  Siroja: 3,
};

console.log(experience);

const experienceArr = Object.values(experience);

console.log(experienceArr);

let sumOfExpa = 0;
let workersJun = 0;
let workersSenior = 0;

experienceArr.forEach((item) => {
  sumOfExpa += item;
  if (item < 3) {
    workersJun++;
  }
  if (item >= 20) {
    workersSenior++;
  }
});

const midOfExpa = sumOfExpa / experienceArr.length;

console.log(Math.round(midOfExpa));
console.log(workersJun);
console.log(workersSenior);
