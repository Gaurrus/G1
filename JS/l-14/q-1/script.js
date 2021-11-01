"use strict";

const redCells = document.querySelectorAll(".table-item");
console.log(redCells);

redCells.forEach((item, index) => {
  redCells[4 * index].style.backgroundColor = "red";
  redCells[6 * index].style.backgroundColor = "red";
});
