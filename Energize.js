const menu = document.getElementById('links');
const toggleButton= document.querySelector('.menu-toggle');
const toggleIcon = toggleButton.querySelector('i');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    menu.classList.toggle('show');
    const expanded = menu.classList.contains('show');
    toggleIcon.classList.toggle('fa-bars', !expanded);
    toggleIcon.classList.toggle('fa-times', expanded);
    navLinks.classList.toggle('show', expanded);