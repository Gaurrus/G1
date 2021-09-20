'use strict'
let width = 1024;
let imgCol = +prompt("Сколько изображений в галерее?");
let widthImg = +prompt("Ширина каждого изображниея?");
let margin = +prompt("Какой отступ?");
let resWidth = width % (widthImg + margin * 2); //остаток ширины
let resultImgCol = (width - resWidth) / (widthImg + margin * 2); //количество изображений в ряду
let colRowImg = (imgCol - (imgCol % resultImgCol)) / resultImgCol; //количесико целых рядов
console.log(resWidth); 
console.log(colRowImg); //количесико целых рядов


alert('Количество изображенией в ряду ' + resultImgCol);
alert('Количество рядов ' + colRowImg);