"use strict";

const workers = [
  [1, `Огурцов`, `электрик`],
  [2, `Помидоров`, `сантехник`],
  [3, `Баклажанов`, `слесарь`],
  [4, `Перцев`, `механик`],
];
console.log(workers);

const workersMap = new Map(workers);
console.log(workersMap);

workersMap.forEach((keys, value) => {
  console.log(`${keys} - ${value}`);
});

console.log(workersMap.get(1))