"use strict";
let result;
let diagonalInch = prompt('Введите диагональ в дюймах');

function calcMonitorSmDiagonal(){
  result = diagonalInch * 2.54;
  return result;
};

calcMonitorSmDiagonal();



alert(`Диагональ в сантиметрах равна ${result.toFixed(2)}`)
