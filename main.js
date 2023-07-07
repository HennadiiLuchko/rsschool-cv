// BURGER MENU

const menuBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function openMenu() {
  menuBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}

menuBtn.addEventListener('click', openMenu);

function closeMenu() {
  setTimeout(() => {
    menuBtn.classList.toggle('collapsed');
    nav.classList.toggle('collapsed');
    navList.classList.toggle('collapsed');
  }, 800);  
}

Array.from(navItems);

navItems.forEach(el => el.addEventListener('click', closeMenu));
