let mainNavigation = document.querySelector('.main-navigation');
let navigationList = document.querySelector('.main-navigation__list');
let navigationToggle = document.querySelector('.main-navigation__toggle');
let navigationText = navigationToggle.querySelector('span');
let iconOpen = document.querySelector('.main-navigation__icon-open');
let iconClose = document.querySelector('.main-navigation__icon-close');

mainNavigation.classList.remove('main-navigation--nojs');

navigationToggle.addEventListener('click', function () {
  if (mainNavigation.classList.contains('main-navigation--opened')) {
    mainNavigation.classList.remove('main-navigation--opened');
    mainNavigation.classList.add('main-navigation--closed');
    iconClose.style.display = "none";
    iconOpen.style.display = "block";
    navigationText.textContent = 'Открыть меню';
  } else {
    mainNavigation.classList.add('main-navigation--opened');
    mainNavigation.classList.remove('main-navigation--closed');
    iconOpen.style.display = "none";
    iconClose.style.display = "block";
    navigationText.textContent = 'Закрыть меню';
  }
});
