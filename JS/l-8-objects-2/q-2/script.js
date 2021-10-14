"use strict";

function Viechle(model, engineVolume, year) {
  this.model = model;
  this.engineVolume = engineVolume;
  this.year = year;
}

const bmwViechle = new Viechle('BMW', 3000, 2007);
const teslaViechle = new Viechle('Tesla', 'элкетро', 2015);

console.log(bmwViechle);
console.log(teslaViechle);