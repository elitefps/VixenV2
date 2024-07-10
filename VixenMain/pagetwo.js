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

document.addEventListener("DOMContentLoaded", function() {

    class App extends React.Component {
      render() {
        return (
          <div>
            <h1>Welcome to Page Two</h1>
            <p>This is a simple React component integrated into pagetwo.html.</p>
          </div>
        );
      }
    }
  
    // Render the React component into the DOM element with id 'root'
    ReactDOM.render(<App />, document.getElementById('root'));
  });
  