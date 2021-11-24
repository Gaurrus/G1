"use strict";

function Slider() {
  this.imagesUrls = [];
  this.currentImageIndex = 0;
  this.showPrevBtn = null;
  this.showNextBtn = null;
  this.slideImage = null;
}

Slider.prototype.init = function (elId) {
  const that = this;

  const el = document.querySelector("#" + elId);

  this.showPrevBtn = el.querySelector(".prev-button");
  this.showNextBtn = el.querySelector(".next-button");
  this.slideImage = el.querySelector(".slider-image");

  this.showPrevBtn.addEventListener("click", function (e) {
    that.onShowPrevBtnClick(e);
  });
  this.showNextBtn.addEventListener("click", function (e) {
    that.onShowNextBtnClick(e);
  });

  this.imagesUrls.push(
    `http://wallpapers-image.ru/1024x768/cars/wallpapers/wallpapers-cars-1.jpg`
  );
  this.imagesUrls.push(
    `http://wallpapers-image.ru/1024x768/cars/wallpapers/wallpapers-cars-3.jpg`
  );
  this.imagesUrls.push(
    `http://wallpapers-image.ru/1024x768/cars/wallpapers/wallpapers-cars-5.jpg`
  );
  this.imagesUrls.push(
    `http://wallpapers-image.ru/1024x768/cars/wallpapers/wallpapers-cars-6.jpg`
  );

  this.slideImage.src = this.imagesUrls[this.currentImageIndex];
  this.showPrevBtn.disabled = true;
};

Slider.prototype.onShowPrevBtnClick = function (e) {
  this.currentImageIndex--;
  this.slideImage.src = this.imagesUrls[this.currentImageIndex];
  this.showNextBtn.disabled = false;
  if (this.currentImageIndex === 0) {
    this.showPrevBtn.disabled = true;
  }
};

Slider.prototype.onShowNextBtnClick = function (e) {
  this.currentImageIndex++;
  this.slideImage.src = this.imagesUrls[this.currentImageIndex];
  this.showPrevBtn.disabled = false;
  if (this.currentImageIndex === this.imagesUrls.length - 1) {
    this.showNextBtn.disabled = true;
  }
};

const slider1 = new Slider();
const slider2 = new Slider();

slider1.init("slider1");
slider2.init("slider2");
