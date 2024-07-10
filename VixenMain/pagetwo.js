document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initNavbarToggle();
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            const navbarNav = document.querySelector('#navbarNav');
            if (navbarNav.classList.contains('show')) {
                navbarNav.classList.remove('show');
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
