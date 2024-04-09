// Burger Menu
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuOpenBtn = document.querySelector('.burger-menu-open');
const burgerMenuCloseBtn = document.querySelector('.burger-menu-close');


function toggleBurgerMenuHandler() {
  burgerMenu.classList.toggle('burger-menu-active');
}