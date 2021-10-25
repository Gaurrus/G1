"use strict";
alert(
  "ВНИМАНИЕ! Количество изображений не более 20 - ширина - от 200 до 500 с шагом 50, отступы - от 4 до 10!"
);
let conTainers = document.querySelectorAll(".img-container");
console.log(conTainers);
let width = 1024;
let imgCol = +prompt("Сколько изображений в галерее?");
console.log(imgCol + " количество");
let widthImg = +prompt("Ширина каждого изображниея?");
let margin = +prompt("Какой отступ?");
console.log(margin + " отступ");
if (
  imgCol <= 20 &&
  (widthImg == 200 ||
    widthImg == 250 ||
    widthImg == 300 ||
    widthImg == 350 ||
    widthImg == 400 ||
    widthImg == 450 ||
    widthImg == 500) &&
  (margin == 4 ||
    margin == 5 ||
    margin == 6 ||
    margin == 7 ||
    margin == 8 ||
    margin == 9 ||
    margin == 10)
) {
  // conTainers.forEach((conTainer) => {
  // });
  for (let index = 0; index < imgCol; index++) {
    const conTainer = conTainers[index];

    if (widthImg == 200) {
      conTainer.classList.add("img-container-200");
    } else conTainer.classList.remove("img-container-200");
    if (widthImg == 250) {
      conTainer.classList.add("img-container-250");
    } else conTainer.classList.remove("img-container-250");
    if (widthImg == 300) {
      conTainer.classList.add("img-container-300");
    } else conTainer.classList.remove("img-container-300");
    if (widthImg == 350) {
      conTainer.classList.add("img-container-350");
    } else conTainer.classList.remove("img-container-350");
    if (widthImg == 400) {
      conTainer.classList.add("img-container-400");
    } else conTainer.classList.remove("img-container-400");
    if (widthImg == 450) {
      conTainer.classList.add("img-container-450");
    } else conTainer.classList.remove("img-container-450");
    if (widthImg == 500) {
      conTainer.classList.add("img-container-500");
    } else conTainer.classList.remove("img-container-500");

    if (margin == 4) {
      conTainer.classList.add("margin-4");
    } else conTainer.classList.remove("margin-4");
    if (margin == 5) {
      conTainer.classList.add("margin-5");
    } else conTainer.classList.remove("margin-5");
    if (margin == 6) {
      conTainer.classList.add("margin-6");
    } else conTainer.classList.remove("margin-6");
    if (margin == 7) {
      conTainer.classList.add("margin-7");
    } else conTainer.classList.remove("margin-7");
    if (margin == 8) {
      conTainer.classList.add("margin-8");
    } else conTainer.classList.remove("margin-8");
    if (margin == 9) {
      conTainer.classList.add("margin-9");
    } else conTainer.classList.remove("margin-9");
    if (margin == 10) {
      conTainer.classList.add("margin-10");
    } else conTainer.classList.remove("margin-10");
  }
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
} else
  alert(
    "Введено неверное значение. Количество изображений не более 20 - ширина - от 200 до 500 с шагом 50, отступы - от 4 до 10!"
  );
