const menuToggle = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function () {
  navbar.classList.toggle('active');
});