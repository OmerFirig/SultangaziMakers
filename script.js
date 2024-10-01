const navBar = document.querySelector('.mobil-nav');
const toggleButton = document.querySelector('.toggle-button');
const navList = navBar.querySelector('ul');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('show-menu');
  toggleButton.classList.toggle('animate');
  menu.classList.toggle('show');
});
const element = document.querySelector('.toggle-button');

element.addEventListener('click', () => {
  element.classList.toggle('clicked');
});