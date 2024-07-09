// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of adding more animations or interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Example: Hover effect on elements with the class 'interactive'
    document.querySelectorAll('.interactive').forEach(el => {
        el.addEventListener('mouseover', () => {
            el.classList.add('hovered');
        });
        el.addEventListener('mouseout', () => {
            el.classList.remove('hovered');
        });
    });

    // Scroll reveal example
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    });
});

/*
Enable when ready for deployment.
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.keyCode == 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode == 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode == 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode == 85) || // Ctrl+U
        (event.ctrlKey && event.keyCode == 83) // Ctrl+S
    ) {
        event.preventDefault();
    }
});  
*/
