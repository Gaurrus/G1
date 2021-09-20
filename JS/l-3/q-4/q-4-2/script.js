'use strict'
let width = 1024;
let imgCol = +prompt("Сколько изображений в галерее?");
let widthImg = +prompt("Ширина каждого изображниея?");
let margin = +prompt("Какой отступ?");
let result = width / widthImg + margin * 2;


alert('Количество изображенией ' + result);