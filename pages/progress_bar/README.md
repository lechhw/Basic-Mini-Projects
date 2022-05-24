# Project 07. Progress Bar

<br>

# Implement

- [x] 막대형, 원형 progress bar 구현하기
- [x] animation 효과 주기

<br>

# Solution

- setInterval() 함수를 사용하였고 원형 progress bar 는 css의 conic-gradient 속성을 이용하여 animation 효과를 주었다.

```js
const handleProgress = () => {
  let i = 1;
  let ii = 1;
  const makeDonut = setInterval(() => {
    if (i <= 100) {
      donut.style.background = `conic-gradient(#c0e218 0% ${i}%, #eeeeee ${i}% 100%)`;
      donutInner.innerText = `${i}%`;
      i++;
    } else {
      donutTitle.innerText = 'Complete!';
      donutTitle.style.color = '#81B214';
      clearInterval(makeDonut);
    }
  }, 30);

  const makeHorizontal = setInterval(() => {
    if (ii <= 100) {
      horizontal.style.width = `${ii}%`;
      horizontalInner.innerText = `${ii}%`;
      ii++;
    } else {
      horizontalTitle.innerText = 'Complete!';
      horizontalTitle.style.color = '#81B214';
      clearInterval(makeHorizontal);
    }
  }, 30);
};

window.onload = handleProgress();
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/169995239-948af768-2994-4661-83b9-45e92938853f.gif">
