"use strict";

let salary = {
  petrov: 500,
  ivanov: 600,
  sidorov: 450,
  sokolov: 550,
  petuhov: 800,
  kurochkin: 720,
  sobachkin: 650,
  koshechkin: 480,
  pupkin: 590,
  kirkorov: 1000,

  calcMidSalary() {
    let sum = 0;
    let salaryMid = 0;
    let workers = 0;
    for (let key in this) {
      if (
        this[key] != this.calcMidSalary &&
        this[key] != this.calcMinSalary &&
        this[key] != this.calcMaxSalary
      ) {
        sum = sum + this[key];
        workers++;
        salaryMid = sum / workers;
      }
    }
    return salaryMid;
  },

  calcMinSalary() {
    let min;
    for (let key in this) {
      if (
        this[key] != this.calcMinSalary &&
        this[key] != this.calcMidSalary &&
        this[key] != this.calcMaxSalary
      ) {
        min = this[key];
        for (key in this) {
          if (min >= this[key]) min = this[key];
        }
      }
    }
    return min;
  },

  calcMaxSalary() {
    let max;
    for (let key in this) {
      if (
        this[key] != this.calcMinSalary &&
        this[key] != this.calcMidSalary &&
        this[key] != this.calcMaxSalary
      ) {
        max = this[key];
        for (key in this) {
          if (max <= this[key]) max = this[key];
        }
      }
    }
    return max;
  },
};

salary.globalSalaryMid = salary.calcMidSalary();

console.log(`Средняя зараплата ${salary.globalSalaryMid}`);

salary.globalMin = salary.calcMinSalary();

console.log(`Минимальная закрплата ${salary.globalMin}`);

salary.globalMax = salary.calcMaxSalary();

console.log(`Максимальная зарплата ${salary.globalMax}`);
