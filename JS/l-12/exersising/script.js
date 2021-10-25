"use strict";

const arr = {
  worker1: {
    fName: "Гаголь",
    sName: "Гаголевич",
    lName: "Гаголев",
  },
  worker2: {
    fName: "Василь",
    sName: "Васильевич",
    lName: "Васильев",
  },
  worker3: {
    fName: "Пятро",
    sName: "Пятрович",
    lName: "Пятроу",
  },
};

const {
  worker1: { fName: firstName },
  worker1: work,
} = arr;

console.log(firstName);

console.log(Object.keys(work));
