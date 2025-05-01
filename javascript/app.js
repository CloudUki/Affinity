const backgroundImages = [
    '/assets/landing-one.jpg',
    '/assets/landing-two.jpg',
    '/assets/landing-three.jpg'
  ];
  
  backgroundImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

const preloadImages = (sources, callback) => {
let loaded = 0;

sources.forEach(src => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
    loaded++;
    if (loaded === sources.length) {
        callback();
    }
    };
});
};

preloadImages(backgroundImages, () => {
const carousel = document.querySelector('#carousel');
if (carousel) {
    const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: 'carousel'
    });
}
});


$(document).ready(function () {
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const number = $('#number').val();
    const message = $('#message').val();

    console.log('Form submitted with:', { name, email, number, message });

    alert('Thanks for your message, ' + name + '!');

    $(this).trigger('reset');
  });
});

$(document).ready(function () {
  $('.portfolio-image').hide().fadeIn(1000);
});

$(document).ready(function () {
  $('.arrow-icon').hide().fadeIn(1000);
});