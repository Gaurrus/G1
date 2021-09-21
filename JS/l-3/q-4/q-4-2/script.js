'use strict'
let conTainer = document.querySelector('.img-container');
let width = 1024;
let imgCol = +prompt("Сколько изображений в галерее?");
console.log(imgCol + ' количество');
let widthImg = +prompt("Ширина каждого изображниея?");
    if (widthImg == 200) {
      conTainer.classList.add('img-container-200');
    }
    else if (widthImg == 250){
      conTainer.classList.remove('img-container-200');
      conTainer.classList.add('img-container-250');
    }
    else if (widthImg == 300){
      conTainer.classList.remove('img-container-250');
      conTainer.classList.add('img-container-300');
    }
    else 
    conTainer.classList.remove('img-container-300');
console.log(widthImg + ' ширина');

let margin = +prompt("Какой отступ?");
console.log(margin + ' отступ');
let resWidth = width % (widthImg + margin * 2); //остаток ширины
console.log(resWidth + ' остаток ширины');
let resultImgCol = (width - resWidth) / (widthImg + margin * 2); //количество изображений в ряду
console.log(resultImgCol + ' изо в ряду');
let colRowImg = (imgCol - (imgCol % resultImgCol)) / resultImgCol; //количесико целых рядов
console.log(colRowImg + ' целых рядов');
let resImgLastRow = imgCol - resultImgCol * colRowImg;
console.log(resImgLastRow + ' в последнем ряду');
  



alert('Количество изображенией в ряду ' + resultImgCol);
alert('Количество целых рядов ' + colRowImg);
alert('Изображений в последнем ряду ' + resImgLastRow);
