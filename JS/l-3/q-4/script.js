'use strict'
let width = 1024;
let imgCol = prompt("Сколько изображений в галерее?");
let margin = 5;
let result = width / imgCol + margin * 2;
alert('Задай ширину ' + result);