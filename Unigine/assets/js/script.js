'use strict';

/**
 * MOBILE NAVBAR
 * navbar will show afer clicking toggle icon
 */

const navBar = document.querySelector("[data-navbar]");

const navToggler = document.querySelector("[data-nav-toggler]");

const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = () => {
    navBar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav)

const navClose = () => {
    navBar.classList.remove("active");
    navToggler.classList.remove("active");
}

navLinks.forEach(navLink => {
    navLink.addEventListener("click", navClose)
})

/**
 * HEADER
 * header will be active after scroll down 100px of screen
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const scrollDown = () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll", scrollDown);

/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

buttons.forEach(button => {
    button.addEventListener("mousemove", (e) => {
        button.style.setProperty("--top", `${e.offsetY}px`);
        button.style.setProperty("--left", `${e.offsetX}px`);
    });
});

/**
 * Scoll reveal 
 */

const revealElements = document.querySelectorAll(("[data-reveal]"));

const revealElementScroll = () => {
    revealElements.forEach(revealElement => {
        if (revealElement.getBoundingClientRect().top < window.innerHeight / 1.2) {
            revealElement.classList.add("revealed");
        }
    })
}

window.addEventListener("scroll", revealElementScroll);

window.addEventListener("loading", revealElementScroll);