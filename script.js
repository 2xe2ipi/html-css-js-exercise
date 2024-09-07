/* Sir, inilagay ko na lang rin po dito 'yung code pero nasa HTML file pa rin po sya, hindi ko po ni-link 'tong file na ito kasi 
hindi ko po mapagana 'yung background change color 'pag naka-link*/

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Form submitted! Thank you for reaching out.');
  this.reset();
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
   
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}

function changeBackgroundColor(element) {
  const portfolioItem = element.closest('.portfolio-item');
  const randomColor = getRandomColor();
  portfolioItem.style.backgroundColor = randomColor;
}
