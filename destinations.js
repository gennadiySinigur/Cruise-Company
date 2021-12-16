const burger = document.getElementById('burger');
const sideMenu = document.getElementById('side-menu');
const close = document.getElementById('close');

burger.addEventListener('click', () => {
  sideMenu.style.display = 'block';

  document.body.style.overflow = "hidden";

});

close.addEventListener('click', () => {
  sideMenu.style.display = 'none';

  document.body.style.overflow = "";

});