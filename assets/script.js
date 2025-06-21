document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
});


