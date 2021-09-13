function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() <= 610) {
  console.log('success');
  const swiper = new Swiper('.swiper', {
  
    // simulateTouch: false,
    keyboard: {
      enabled: true,
    },
  
    autoplay: {
        delay: 2000,
    },
    loop: true,
  
    spaceBetween: 32,
  
    // centeredSlides: true,
  
    breakpoints: {
      610: {
        slidesPerView: 3,
      },
       450: {
        slidesPerView: 2,
       },
  
       401: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
       
    }
  });
} 
else  {
  console.log('success');
  const swiper = new Swiper('.swiper', {
  
    simulateTouch: false,
    keyboard: {
      enabled: true,
    },
  
    // autoplay: {
    //     delay: 2000,
    // },
    loop: true,
  
    spaceBetween: 32,

    slidesPerView: 5,
 
  });
  }