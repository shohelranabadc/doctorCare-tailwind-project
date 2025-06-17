
// initialize dom 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll('.navbar-menu');
const burger = document.querySelectorAll('.navbar-burger');
const close = document.querySelectorAll('.navbar-close');
const backdrop = document.querySelectorAll('.navbar-backdrop');
const mobileMenuLink = document.querySelectorAll('#mobile-menu a[href^="#"');


document.addEventListener('DOMContentLoaded', ()=>{
    handleScroll();
    window.addEventListener('scroll', handleScroll);

function setActiveLink (sections, navLinks) {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove('active'));

    if (navLinks[index]) {
        navLinks[index].classList.add('active')
    }
}


function handleScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    setActiveLink(sections, navLinks);
}

});
