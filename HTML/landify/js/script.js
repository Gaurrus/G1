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

(function () {
  const burgerItem = document.querySelector('.header-burger');
  const menu = document.querySelector('.header-nav');
  const menuCloseItem = document.querySelector('.header-nav-close')
  const body = document.querySelector('.body');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header-nav-active');
    body.classList.add('body-unactive');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
    body.classList.remove('body-unactive');
  });
}());