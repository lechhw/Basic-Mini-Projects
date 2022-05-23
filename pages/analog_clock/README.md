# Project 06. Analog Clock

<br>

# Implement

- [x] 아날로그 시계 구현하기

<br>

# Solution

- 시계 침 회전각도 구하기. transform = rotateZ(deg)로 회전 구현

```js
const hr = date.getHours();
const hrAngle = (hr / 12) * 360;

const mn = date.getMinutes();
const mnAngle = (mn / 60) * 360;

const sc = date.getSeconds();
const scAngle = (sc / 60) * 360;

hour.style.transform = `rotateZ(${hrAngle}deg)`;
minutes.style.transform = `rotateZ(${mnAngle}deg)`;
seconds.style.transform = `rotateZ(${scAngle}deg)`;
```

<br>

- setInterval()함수를 이용하여 매초마다 업데이트.

```js
setInterval(getTime, 0);
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/169802547-e5fcd84b-1892-47e6-8180-60bb1cb532ae.gif">
