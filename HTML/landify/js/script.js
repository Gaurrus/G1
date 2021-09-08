(function () {
  const header = document.querySelector('.header');
  document.onscroll = () => {
    if (window.pageYOffset > 25) {
      header.classList.add('header_active');
    }
    else {
      header.classList.remove('header_active');
    }
  };
}());

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

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
});