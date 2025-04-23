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
  