const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const darkModeIcon = document.querySelector('#Darkmode-icon');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header .navbar a');
const header = document.querySelector('.header');

const closeMenu = () => {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    menuIcon.setAttribute('aria-expanded', 'false');
    menuIcon.setAttribute('aria-label', 'Ouvrir le menu');
    navbar.classList.remove('active');
};

menuIcon.addEventListener('click', () => {
    const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';

    menuIcon.classList.toggle('fa-bars', isExpanded);
    menuIcon.classList.toggle('fa-xmark', !isExpanded);
    menuIcon.setAttribute('aria-expanded', String(!isExpanded));
    menuIcon.setAttribute('aria-label', isExpanded ? 'Ouvrir le menu' : 'Fermer le menu');
    navbar.classList.toggle('active', !isExpanded);
});

navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

const updateActiveLink = () => {
    const currentSection = [...sections].reverse().find((section) => {
        return window.scrollY >= section.offsetTop - 150;
    });

    navLinks.forEach((link) => {
        const isActive = currentSection && link.getAttribute('href') === `#${currentSection.id}`;
        link.classList.toggle('active', Boolean(isActive));
    });

    header.classList.toggle('sticky', window.scrollY > 100);
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('load', updateActiveLink);

darkModeIcon.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('Dark-Mode');

    darkModeIcon.classList.toggle('fa-moon', !isDarkMode);
    darkModeIcon.classList.toggle('fa-sun', isDarkMode);
    darkModeIcon.setAttribute('aria-pressed', String(isDarkMode));
    darkModeIcon.setAttribute(
        'aria-label',
        isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'
    );
});
