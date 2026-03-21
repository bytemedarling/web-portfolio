const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'block';

    navMenu.style.display = isOpen ? 'none' : 'block';
    menuButton.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', !isOpen);
});


