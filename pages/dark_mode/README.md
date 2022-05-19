# Project 02. Dark Mode

<br>

# Implement

- [x] 버튼 클릭으로 기본모드 <-> 다크모드 전환

<br>

# Solution

- 버튼이 토글될때마다 .container 에 .dark 클래스를 추가한다.
  .container.dark 경우 버튼의 innerText 는 White 로 변경한다.

```js
function toggleDarkMode() {
  container.classList.toggle('dark');
  if (container.classList.contains('dark')) {
    button.innerText = 'White';
  } else {
    button.innerText = 'Dark';
  }
}

button.addEventListener('click', toggleDarkMode);
```

<br>

- .container.dark css 설정

```css
/* dark mode */
.container.dark {
  background-color: black;
}

.container.dark .content {
  background-color: #1d1d1d;
  color: #fcffe7;
}

/* default */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #fff;
  background-color: #ff7800;
}
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/169218209-7af9e853-ed6d-4c12-a0ad-498e988419ea.gif">
