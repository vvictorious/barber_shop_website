const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const about = document.querySelector('.about-btn');
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
})

about.addEventListener('click', () => {
	navLinks.classList.toggle('open')
})