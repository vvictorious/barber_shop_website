const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const about = document.querySelector('.about-btn');
const services = document.querySelector('.services-btn');
const contacts = document.querySelector('.contacts-btn');
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
});

about.addEventListener('click', () => {
	navLinks.classList.toggle('open')
});

services.addEventListener('click', () => {
	navLinks.classList.toggle('open')
});

contacts.addEventListener('click', () => {
	navLinks.classList.toggle('open')
})