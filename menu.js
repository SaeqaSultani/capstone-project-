const icon = document.querySelector('.icon');
const close = document.querySelector('.close-link');
const menu_link = document.querySelector('.menu-links');
const nav = document.querySelectorAll('.nav-link');

icon.addEventListener('click', () => {
  menu_link.style.display = 'flex';
  icon.style.display = 'none';
  nav.forEach((n) => n.addEventListener('click',() =>{
    menu_link.style.display = 'none';
    icon.style.display = 'block';
  }));
});

close.addEventListener('click', () => {
  menu_link.style.display = 'none';
  icon.style.display = 'block';
});
