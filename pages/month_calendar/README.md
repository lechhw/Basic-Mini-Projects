# Project 04. Month Calendar

<br>

# Implement

- [x] 월별 달력 표시
- [x] 달력에 today 표시
- [x] 버튼 클릭시 이전달, 다음달로 이동

<br>

# Solution

- 월 이동 시 오늘 날짜가 31일 일때 이전달,다음달에 31일이 없는 월일 경우, 그 다음월로 넘어가는 에러 발생. 그래서 date.setDate(1)을 주었다. 모든 월에는 1일이 있기때문.

```js
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// 이전달로 이동
const goPrevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};
prevButton.addEventListener('click', goPrevMonth);

// 다음달로 이동
const goNextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};
nextButton.addEventListener('click', goNextMonth);
```

<br>

- today 다른 스타일 적용

```js
// today 구하기
const today = new Date();
if (month === today.getMonth() && year === today.getFullYear()) {
  for (let day of document.querySelectorAll('.this')) {
    if (Number(day.innerText) === today.getDate()) {
      day.classList.add('today');
      break;
    }
  }
}
```

```css
/* today */
.this.today {
  color: white;
  background-color: #eb5353;
  border-radius: 8px;
}
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/169560974-ab211baa-9dc5-436c-af96-16307db2266d.gif">
