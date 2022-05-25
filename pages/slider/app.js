// auto-slider
const firstItem = document.querySelector('.item:first-child');
const SHOWING_CLASS = 'showing';

const handleAutoSlider = () => {
  const currentItem = document.querySelector(`.item.${SHOWING_CLASS}`);

  if (currentItem) {
    currentItem.classList.remove(SHOWING_CLASS);
    const nextSibling = currentItem.nextElementSibling;

    if (nextSibling) {
      nextSibling.classList.add(SHOWING_CLASS);
    } else {
      firstItem.classList.add(SHOWING_CLASS);
    }
  } else {
    firstItem.classList.add(SHOWING_CLASS);
  }
};

handleAutoSlider();
setInterval(handleAutoSlider, 3000);

// button-slider
const slider = document.querySelector('.button-slider .slider');
const slideList = document.querySelector('.slide-list');
const slides = slideList.querySelectorAll('.slide-item');
const slideCount = slideList.querySelectorAll('.slide-item').length;
let currentIndex = 0;

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

const handleButtonSlider = () => {
  const slide = () => {
    for (let i = 0; i < slideCount; i++) {
      slides[i].style.left = `${i * 100}%`;
    }
  };
  slide();

  const goToSlide = (index) => {
    slideList.style.left = `${index * -100}%`;
    currentIndex = index;
    if (index < 0) {
      slideList.style.left = `${(slideCount - 1) * -100}%`;
      currentIndex = slideCount - 1;
    } else if (index === slideCount) {
      slideList.style.left = 0;
      currentIndex = 0;
    }
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
};

window.onload = handleButtonSlider();
