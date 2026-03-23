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
  threshold: 0.2
});

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.3}s`; // stagger
  observer.observe(card); // observe each card individually
});


/* const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px" 
  }
);

projectCards.forEach(card => observer.observe(card)); */
