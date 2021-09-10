const swiper = new Swiper('.tailor-cards', {
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
  
  keyboard: {
    enabled: true,
  },

  autoplay: {
      delay: 1000,
  },
  
  loop: true,

  slidesPerView: 1,

  spaceBetween: 8,
 
});