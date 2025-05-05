new Splide('.splide', {
  type        : 'loop',
  perPage     : 1,
  autoplay    : true,
  interval    : 3000,
  pauseOnHover: true,
  arrows      : true,
  pagination  : true,
  drag        : true,         // enables mouse drag
  flickPower  : 600,          // adjust swipe strength
  flickMaxPages: 1,           // prevent swiping too far
}).mount();


document.addEventListener('DOMContentLoaded', function () {
  const title = document.createElement('h1');
  title.className = 'carousel-title';
  title.innerText = 'DIGITAL DESIGNER';

  const splideSection = document.querySelector('.splide');
  if (splideSection) {
    splideSection.insertBefore(title, splideSection.firstChild);
  }
});

