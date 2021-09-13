let tailorSlider = null;
const mediaQuerrySize = 1040;

function tailorSliderInit() {
  if (!tailorSlider) {
    tailorSlider = new Swiper(".tailor-cards", {
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 2500,
      },
      loop: true,
      spaceBetween: 16,
      breakpoints: {
        767: {
          slidesPerView: 4,
        },
        651: {
          slidesPerView: 3,
        },
        420: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  }
}

const tailorSliderDestroy = () => {
  if (tailorSlider) {
    tailorSlider.destroy();
    tailorSlider = null;
  }
};

const getTailorSlider = () => {
  // Если ширина экрана меньше или равна mediaQuerySize(1040)
  if (window.innerWidth <= mediaQuerrySize) {
    // Инициализировать слайдер
    tailorSliderInit();
  } else {
    // Уничтожить слайдер
    tailorSliderDestroy();
  }
};

getTailorSlider();

window.addEventListener("resize", () => {
  getTailorSlider();
});
