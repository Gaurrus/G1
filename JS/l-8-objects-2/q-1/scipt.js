"use strict";
let square = {
  width: 200,
  height: 200,
  mathArea() {
    let area = this.width * this.height;
    return console.log(area);
  },
  mathPerimetr() {
    let perimetr = (this.width + this.height) * 2;
    return console.log(perimetr);
  },
};

square.width = +prompt(`Введите ширину`);
square.height = +prompt(`Введите высоту`);

square.mathArea();

square.mathPerimetr();
