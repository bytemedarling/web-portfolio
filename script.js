/* Button Toggle for Mobile Navigation */
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'block';

    navMenu.style.display = isOpen ? 'none' : 'block';
    menuButton.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', !isOpen);
});

/* Project Card Effect */

const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1, // lower threshold so desktop triggers properly
  rootMargin: "0px 0px -10% 0px" // helps trigger slightly before fully visible
});

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.3}s`;
  observer.observe(card);
});
