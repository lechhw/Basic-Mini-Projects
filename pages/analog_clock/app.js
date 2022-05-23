const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function getTime() {
  const date = new Date();

  const hr = date.getHours();
  const hrAngle = (hr / 12) * 360;

  const mn = date.getMinutes();
  const mnAngle = (mn / 60) * 360;

  const sc = date.getSeconds();
  const scAngle = (sc / 60) * 360;

  hour.style.transform = `rotateZ(${hrAngle}deg)`;
  minutes.style.transform = `rotateZ(${mnAngle}deg)`;
  seconds.style.transform = `rotateZ(${scAngle}deg)`;
}
setInterval(getTime, 0);
