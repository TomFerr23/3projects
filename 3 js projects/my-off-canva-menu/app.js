const closedMenu = document.querySelector('.closed-menu');
const openMenu = document.querySelector('.open-menu');

closedMenu.addEventListener('click', () => {
    openMenu.classList.add('active');
    closedMenu.classList.remove('active');
});

openMenu.addEventListener('click', () => {
    closedMenu.classList.add('active');
    openMenu.classList.remove('active');
});
