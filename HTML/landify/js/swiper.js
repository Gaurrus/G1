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

  slidesPerView: 3,

  spaceBetween: 32
});