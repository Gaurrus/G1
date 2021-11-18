"use strict";

class Auto {
  constructor(mark) {
    this.mark = mark;
  }
  go(speed) {
    this.speed = speed;
    console.log(`Скорость ${this.mark} = ${this.speed} km/h`);
  }
  stop() {
    this.speed = 0;
    console.log(`Скорость ${this.mark} = ${this.speed} km/h`);
  }
}

const auto = new Auto("Peugeot");
auto.go(50);
auto.stop();
const auto2 = new Auto("Ford");
auto2.go(50);

class HeavyAuto extends Auto {
  constructor(mark, contry) {
    super(mark);
    this.contry = contry;
  }
  getWeaght(weaght) {
    this.weaght = weaght;
    console.log(`Вес ${this.mark} из ${this.contry} ${this.weaght} тонн`);
  }

  getContryAuto(contry2) {
    this.contry = contry2;
  }
}

const heavy = new HeavyAuto("MAN", "Germany");
heavy.go("30");
heavy.getWeaght("20");

console.log(heavy.mark); //не желательно так использовать и давать использовать пользователям

heavy.contry = "USA";
heavy.getWeaght(`20`);

console.log(heavy.getContryAuto(`20`));
