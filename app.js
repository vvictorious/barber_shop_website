const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const aboutBtn =document.querySelector('.about-btn')

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	links.forEach(link => {
		link.classList.toggle('fade');
	});
});

aboutBtn.addEventListener('click', () =>{
	navLinks.classList = 'nav-links';
	links.forEach(link => {
		link.classList.toggle('fade');
	})
})