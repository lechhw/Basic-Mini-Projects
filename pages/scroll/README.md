# Project 05. Scroll

<br>

# Implement

- [x] 100px 씩 위, 아래로 이동
- [x] point 위치로 이동
- [x] 화면 상단, 화면 하단으로 이동

<br>

# Solution

- scrollBy(),scrollTO() 를 이용하여 스크롤위치 이동 구현.
  behavior: 'smooth' 를 적용하면 해당 위치로 이동할때 부드럽게 이동한다.

```js
function handleScroll(e) {
  if (e.target.innerText === '100px Down') {
    window.scrollBy(0, 100);
  } else if (e.target.innerText === '100px Up') {
    window.scrollBy(0, -100);
  } else if (e.target.innerText === 'Move Point') {
    const point = document.querySelector('.item.point');
    window.scrollBy({
      top: point.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  } else if (e.target.innerText === 'Move Top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else if (e.target.innerText === 'Move Bottom') {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
}

buttonList.forEach((button) => button.addEventListener('click', handleScroll));
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/169760382-e3b9cedf-fbb8-4ca8-a9bc-9540603cb1f1.gif">
