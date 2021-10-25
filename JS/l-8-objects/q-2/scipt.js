"use strict";
const salary = {
  meleshev: 10,
  prishepov: 8,
  pashkevich: 7,
  sorokin: 10,
  machulskiy: 9,
  kravchenko: 7,
  martechkin: 10,
  smokvin: 10,
  murashko: 9,
  starinski: 8,
};

let sum = 0;
let srZp = 0;
let keySum = 0;
for (let key in salary) {
  console.log(key);
  sum = sum + salary[key];
  keySum++;
  srZp = sum / keySum;
}

salary.mid = srZp;

let salaryCopy = Object.assign(salary);

console.log(salaryCopy);

console.log(salary.mid);

let neNizeSrZp =0;
for (let key in salary){
  if (salary[key] >= salary.mid)
  neNizeSrZp++;
} 

salary.chel = neNizeSrZp;
console.log(`Зп не ниже среднего получают ${neNizeSrZp} человек`);
console.log(salary.chel);