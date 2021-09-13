function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() <= 610) {
  console.log('success');
  const swiper = new Swiper('.adds-swiper', {
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
        delay: 2000,
    },
    loop: true,
    spaceBetween: 32,
    centeredSlides: true,
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
  const swiperXx = new Swiper('.tailor-cards', {
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
    spaceBetween: 32,
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
else if (getWindowWidth() <= 900) {
  console.log('else');
  const swiper = new Swiper('.adds-swiper', {
    slidesPerView: 3,
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
  },
  });
  const swiperXx = new Swiper('.tailor-cards', {
    simulateTouch: true,
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 32,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
  },
    });
  }

  else  {
    console.log('else');
    const swiper = new Swiper('.adds-swiper', {
      slidesPerView: 5,
      simulateTouch: true,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      loop: true,
    });
    const swiperXx = new Swiper('.tailor-cards', {
      simulateTouch: true,
      slidesPerView: 6,
      spaceBetween: 32,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      loop: true,
      });
    }