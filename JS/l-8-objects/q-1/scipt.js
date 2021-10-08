"use strict";
const person = {
  surname: "Пупкин",
  name: "Васька",
  middleName: "Пятрович",
};
person.age = "1850";
person.prof = "Мамкин диайвайщик";
person.position = "Генералиссимус";
person.exp = 20;
const personTwo = {
  surname: person.surname,
  name: person.name,
  middleName: person.middleName,
};

delete person.middleName;
if (person.middleName){
  alert(person.middleName);
} else alert('Такого свойства не сущеуствует');

let summKeys = 0;
let sumNumbers = 0;
for (let key in person) {
  summKeys++;
  if (typeof person[key] === "number"){
    sumNumbers++;
  }
  }

alert(summKeys);
alert(sumNumbers);