"use strict";

// const workers = [
//   [1, `Огурцов`, `электрик`],
//   [2, `Помидоров`, `сантехник`],
//   [3, `Баклажанов`, `слесарь`],
//   [4, `Перцев`, `механик`],
// ];
// console.log(workers);

// const workersMap = new Map(workers);
// console.log(workersMap);

// workersMap.forEach((keys, value) => {
//   console.log(`${keys} - ${value}`);
// });

// console.log(workersMap.get(1))

const secArrow = document.querySelector(`.seconds`);
const minArrow = document.querySelector(`.minutes`);
const huorArrow = document.querySelector(`.hours`);
const arrStyles = [
  "seconds-0",
  "seconds-6",
  "seconds-12",
  "seconds-18",
  "seconds-24",
  "seconds-30",
  "seconds-36",
  "seconds-42",
  "seconds-48",
  "seconds-54",
  "seconds-60",
  "seconds-66",
  "seconds-72",
  "seconds-78",
  "seconds-84",
  "seconds-90",
  "seconds-96",
  "seconds-102",
  "seconds-108",
  "seconds-114",
  "seconds-120",
  "seconds-126",
  "seconds-132",
  "seconds-138",
  "seconds-144",
  "seconds-150",
  "seconds-156",
  "seconds-162",
  "seconds-168",
  "seconds-174",
  "seconds-180",
  "seconds-186",
  "seconds-192",
  "seconds-198",
  "seconds-204",
  "seconds-210",
  "seconds-216",
  "seconds-222",
  "seconds-228",
  "seconds-234",
  "seconds-240",
  "seconds-246",
  "seconds-252",
  "seconds-258",
  "seconds-264",
  "seconds-270",
  "seconds-276",
  "seconds-282",
  "seconds-288",
  "seconds-294",
  "seconds-300",
  "seconds-306",
  "seconds-312",
  "seconds-318",
  "seconds-324",
  "seconds-330",
  "seconds-336",
  "seconds-342",
  "seconds-348",
  "seconds-354",
];

const getSeconds = () => {
  let time = new Date();
  let seconds = time.getSeconds();
  for (let i = 0; i <= 59; i++) {
    if (i == seconds) {
      secArrow.classList.remove(arrStyles[59]);
      secArrow.classList.add(arrStyles[i]);
      secArrow.classList.remove(arrStyles[i - 1]);
    }
  }
};

const getMinutes = () => {
  let time = new Date();
  let seconds = time.getMinutes();
  for (let i = 0; i <= 59; i++) {
    if (i == seconds) {
      minArrow.classList.remove(arrStyles[59]);
      minArrow.classList.add(arrStyles[i]);
      minArrow.classList.remove(arrStyles[i - 1]);
    }
  }
};

const getHours = () => {
  let time = new Date();
  let seconds = time.getHours();
  for (let i = 0; i <= 59; i++) {
    if (i == seconds) {
      huorArrow.classList.remove(arrStyles[59]);
      huorArrow.classList.add(arrStyles[5 + i]);
      huorArrow.classList.remove(arrStyles[i - 1]);
    }
  }
};

setInterval(getSeconds, 1000);
setInterval(getMinutes, 1000);
setInterval(getHours, 1000);
