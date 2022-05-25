# Project 09. Painting App

## 🎨 그림판 앱

<br>

# Implement

- [x] canvas 요소를 이용하여 그림판 기능 구현
- [x] paint, fill 모드로 나누어 해당하는 모드에 맞게 그리기 구현
- [x] 색상 변경 , 현재 색상 표시
- [x] 펜 두께 조절 기능
- [x] 이미지 저장기능(.png)

<br>

# Solution

- canvas 의 getContext() 메서드를 이용하여 그림판 기능 구현

```js
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

// 라인그리기
const handlePainting = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

// 캔버스 칠하기
const handleFilling = () => {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);
  }
};
```

- 버튼 클릭시 해당하는 모드로 사용가능하고 border 색상을 따로 주어 현재 어떤 모드인지 알 수 있게 구현하였다.

```js
// 칠하기 모드
const handleFillMode = () => {
  if (!filling) {
    filling = true;
    fillButton.style.border = '3px solid red';
    fillCurrentColor.style.display = 'block';
    paintButton.style.border = '1px solid #dfdfde';
    paintCurrentColor.style.display = 'none';
  }
};

// 그리기 모드
const handlePaintMode = () => {
  if (filling) {
    filling = false;
    fillButton.style.border = '1px solid #dfdfde';
    fillCurrentColor.style.display = 'none';
    paintButton.style.border = '3px solid red';
    paintCurrentColor.style.display = 'block';
  }
};
```

<br>

- 색상 팔레트를 클릭하면 해당하는 색상으로 색이 변경되고, 현재 색상을 해당 모드 버튼 위에 보여주었다.

```js
// 색 변경
const changeColor = (e) => {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  paintCurrentColor.style.backgroundColor = color;
  fillCurrentColor.style.backgroundColor = color;
};
```

<br>

- canvas 우클릭을 막고, toDataURL() 함수를 이용하여 save 버튼 클릭시 이미지 저장 기능을 구현하였다.

```js
// 캔버스 우클릭 제한
const handleRightClick = (e) => {
  e.preventDefault();
};

//이미지 저장
const handleImageSave = () => {
  const src = canvas.toDataURL(); // png 파일저장
  const a = document.createElement('a');
  a.href = src;
  a.download = '[Paint🎨]';
  a.click();
};
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/170302075-0cba201c-6040-48f6-8e8d-00b85ed88e4d.gif">
