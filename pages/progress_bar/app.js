const donut = document.querySelector('.donut');
const donutInner = document.querySelector('.donut .inner');
const donutTitle = document.querySelector('.card.dn h2');

const horizontal = document.querySelector('.horizontal .inner');
const horizontalInner = document.querySelector('.card.hr strong');
const horizontalTitle = document.querySelector('.card.hr h2');

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
