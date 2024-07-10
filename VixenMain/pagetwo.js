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
  class Accordion extends React.Component {
    render() {
      return (
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<Accordion />, document.getElementById('root'));
});
