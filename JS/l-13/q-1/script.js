"use strict";

const meditions = {
  fullName: `Пятро Пятрович Пятроу`,
  age: 75,
  medCheck: true,
};

const jsonMed = JSON.stringify(meditions);

console.log(jsonMed);

const parseMed = JSON.parse(jsonMed);

console.log(parseMed);
