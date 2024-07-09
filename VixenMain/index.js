// index.js

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    initHoverEffect();
    initScrollReveal();
    initNavbarToggle();
});

function initHoverEffect() {
    document.querySelectorAll('.interactive').forEach(el => {
        el.addEventListener('mouseover', () => {
            el.classList.add('hovered');
        });
        el.addEventListener('mouseout', () => {
            el.classList.remove('hovered');
        });
    });
}

function initScrollReveal() {
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    });
}

function initNavbarToggle() {
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        const navbarNav = document.querySelector('#navbarNav');
        navbarNav.classList.toggle('show');
    });
}

/*
Enable when ready for deployment.
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.keyCode == 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode == 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode == 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode == 85) || // Ctrl+U
        (event.ctrlKey and event.keyCode == 83) // Ctrl+S
    ) {
        event.preventDefault();
    }
});
*/
