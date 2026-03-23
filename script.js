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
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.4,
    rootMargin: "0px 0px -50px 0px"
  }
);
