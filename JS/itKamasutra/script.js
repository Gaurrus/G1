"use strict";

const slider1 = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPrevBtn: document.querySelector(".prev-button"),
  showNextBtn: document.querySelector(".next-button"),
  slideImage: document.querySelector(".slider-image"),
  onShowPrevBtnClick: function (e) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  },
  onShowNextBtnClick: function (e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;
    if (this.currentImageIndex === this.imagesUrls.length - 1) {
      this.showNextBtn.disabled = true;
    }
  },

  init: function () {
    const that = this;
    this.showPrevBtn.addEventListener("click", function (e) {
      that.onShowPrevBtnClick(e);
    });
    this.showNextBtn.addEventListener("click", function (e) {
      that.onShowNextBtnClick(e);
    });

    this.imagesUrls.push(
      `https://klike.net/uploads/posts/2019-05/1559021799_1.jpg`
    );
    this.imagesUrls.push(
      `https://bipbap.ru/wp-content/uploads/2017/09/122916_037145701590.jpg`
    );
    this.imagesUrls.push(
      `https://lh3.googleusercontent.com/proxy/KH0jN05v9X7D8oXbPxPx6_7Bx4SBUvIjLnR5OrblL0mYOtUdEgAJLgbJIRoyyT-5cTkqkO33nneb4opDWoVTk6BKVNnhjoDPBpRi0YFwvw`
    );
    this.imagesUrls.push(
      `https://www.ixbt.com/img/n1/news/2020/7/4/Tesla-wrap-hero_large.jpg`
    );

    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  },
};

slider1.init();
