const date = new Date();

const renderCalendar = () => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const renderMonth = String(month + 1).padStart(2, 0);

  const arrayMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  document.querySelector('.month').textContent = arrayMonth[month];
  document.querySelector('.year-month').textContent = `${year}-${renderMonth}`;

  // 이전달 마지막 날짜,요일 구하기
  const prevLastDate = new Date(year, month, 0).getDate();
  const prevLastDay = new Date(year, month, 0).getDay();

  // 이번달 마지막 날짜,요일 구하기
  const lastDate = new Date(year, month + 1, 0).getDate();
  const lastDay = new Date(year, month + 1, 0).getDay();

  // 이전달 , 이번달, 다음달 날짜의 기본 배열 변수 생성
  const prevDates = [];

  // keys() 메서드를 이용하여 길이가 (lastDate + 1) 인 배열 생성
  const dates = [...Array(lastDate + 1).keys()].slice(1);
  const nextDates = [];

  // 이전달 마지막요일이 토요일이면 제외
  if (prevLastDay !== 6) {
    for (let i = 0; i <= prevLastDay; i++) {
      prevDates.unshift(prevLastDate - i);
    }
  }

  for (let i = 1; i <= 6 - lastDay; i++) {
    nextDates.push(i);
  }
  const fullDates = prevDates.concat(dates, nextDates);

  // 달력에서 이번달 날짜에만 .this 클래스 추가, 이전달,다음달에는 .other 클래스 추가
  const firstDateIndex = fullDates.indexOf(1);
  const lastDateIndex = fullDates.lastIndexOf(lastDate);

  fullDates.forEach((day, i) => {
    const condition =
      i >= firstDateIndex && i <= lastDateIndex ? 'this' : 'other';
    fullDates[i] = `<div class="day ${condition}">${day}</div>`;
  });

  document.querySelector('.days').innerHTML = fullDates.join('');

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
};

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
window.onload = renderCalendar();
