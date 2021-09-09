const swiper = new Swiper('.swiper', {
  // Optional parameters
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  simulateTouch: false,
  keyboard: {
    enabled: true,
  },

  autoplay: {
      delay: 2000,
  },
  loop: true,

  slidesPerView: 4,

  spaceBetween: 8,

  breakpoints: {
    1600: {
      slidesPerView: 5,
      autoplay: false,
    },
    769: {
      slidesPerView: 5,
      autoplay: false,
    },
    768: {
      slidesPerView: 3,
    },

    651: {
      slidesPerView: 3,
    },
    610: {
      slidesPerView: 2,
    },

    450: {
      slidesPerView: 2,
    },
    420: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 1,
    },

    320: {
      slidesPerView: 1,
    }
  }
});