# Project 08. Slider

<br>

# Implement

- [x] 이미지 슬라이더 구현하기
- [x] 일정 시간이 지나면 다음 슬라이드로 이동
- [x] 버튼 클릭시 이전, 다음 슬라이드로 이동

<br>

# Solution

- setInterval() 함수를 사용하여 3초마다 다음 슬라이드를 보여주게 하였다.

```js
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
```

<br>

- absolute 되어 있는 slide-item 들을 각각에 left 값을 주어 가로 정렬 시킨 후에 버튼 클릭시 slide-list 의 left 값을 변경해주었다.

```js
// button-slider
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
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/170219221-5b886e84-c7b5-4779-8097-3e7931106bb0.gif">
