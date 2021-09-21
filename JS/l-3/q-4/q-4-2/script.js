"use strict";
let conTainers = document.querySelectorAll(".img-container");
console.log(conTainers);
let width = 1024;
let imgCol = +prompt("Сколько изображений в галерее?");
console.log(imgCol + " количество");
if (imgCol <= 20) {
  let widthImg = +prompt("Ширина каждого изображниея?");
  let margin = +prompt("Какой отступ?");
  console.log(margin + " отступ");
  conTainers.forEach((conTainer) => {
    if (widthImg == 200) {
      conTainer.classList.add("img-container-200");
    } else if (widthImg == 250) {
      conTainer.classList.remove("img-container-200");
      conTainer.classList.add("img-container-250");
    } else if (widthImg == 300) {
      conTainer.classList.remove("img-container-250");
      conTainer.classList.add("img-container-300");
    } else conTainer.classList.remove("img-container-300");
    if (margin == 4) {
      conTainer.classList.add("margin-4");
    } else conTainer.classList.remove("margin-4");
    if (margin == 5) {
      conTainer.classList.add("margin-5");
    } else conTainer.classList.remove("margin-5");
    if (margin == 6) {
      conTainer.classList.add("margin-6");
    } else conTainer.classList.remove("margin-6");
  });

  console.log(widthImg + " ширина");

  let resWidth = width % (widthImg + margin * 2); //остаток ширины
  console.log(resWidth + " остаток ширины");
  let resultImgCol = (width - resWidth) / (widthImg + margin * 2); //количество изображений в ряду
  console.log(resultImgCol + " изо в ряду");
  let colRowImg = (imgCol - (imgCol % resultImgCol)) / resultImgCol; //количесико целых рядов
  console.log(colRowImg + " целых рядов");
  let resImgLastRow = imgCol - resultImgCol * colRowImg;
  console.log(resImgLastRow + " в последнем ряду");

  alert("Количество изображенией в ряду " + resultImgCol);
  alert("Количество целых рядов " + colRowImg);
  if (resImgLastRow != 0)
    alert("Изображений в последнем ряду " + resImgLastRow);
  else alert("Последний ряд полный");
} else alert("Превышено допустимое количество изображений!");
