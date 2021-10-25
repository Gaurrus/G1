"use strict";

function Sector() {
  this.radius = 18;
  this.alpha = 4;
  this.calcAreaOfSector = () => {
    let area = (3.14 * this.radius ** 2 * this.alpha) / 360;
    return area;
  };
}

const area2 = new Sector("Желтый");
const redArea = new Sector("Красный");

area2.calcAreaOfSector();

console.log(area2.calcAreaOfSector());
