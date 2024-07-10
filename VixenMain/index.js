import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initHoverEffect();
    initScrollReveal();
    initNavbarToggle();
    initActiveLinkHighlight();
    initLazyLoad();
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

function initActiveLinkHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');

    const loadImage = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.removeAttribute('data-src');
    };

    const observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
}

gsap.to(".element", { duration: 2, x: 100, opacity: 1 });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(error) {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}


/* 

 Scrapped feature I decided to not include in the final project because I wasn't planning on making this open sourced. 
 There's no point in adding something that blocks u from viewing inspect element when its open source.

Enable if you'd like.

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
}); */