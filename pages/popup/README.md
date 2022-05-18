# Project 01. Popup

<br>

# Implement

- [x] 팝업창 외부 클릭을 막는 모달창 구현
- [x] open 버튼 클릭시 팝업창 오픈, 팝업창 내 close버튼 클릭시 팝업창 close

<br>

# Solution

- overlay 안에 modal 창을 넣어 팝업창 외부클릭을 막았다.
  overlay 는 position: absolute 를 주어 레이아웃 가장 위에 띄우므로 overlay 아래의 요소에는 클릭이벤트가 적용되지 않는다.

```css
.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100vh);
}

.popup-overlay.open {
  transform: translateY(0);
}
```

<br>

- 팝업창 open & close 기능

```js
function openPopup() {
  popup.classList.add('open');
}
openButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('open');
}
closeButton.addEventListener('click', closePopup);
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/169029742-9bfcb56f-2994-4967-94f9-42a42dd4727a.gif">
