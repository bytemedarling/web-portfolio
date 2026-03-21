/* Button Toggle for Mobile Navigation */
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'block';

    navMenu.style.display = isOpen ? 'none' : 'block';
    menuButton.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', !isOpen);
});

/* Project Card Effeect */
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

cards.forEach(card => observer.observe(card));
