(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 25) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
}());

//*burger hendler start *//

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const menuCloseItem = document.querySelector('.nav-close')
  burgerItem.addEventListener('click', () => {
    menu.classList.add('nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav-active');
  });
}());


//*burger hendler end *//