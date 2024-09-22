const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3000);