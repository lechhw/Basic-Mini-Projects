# Project 09. Painting App

## ๐จ ๊ทธ๋ฆผํ ์ฑ

<br>

# Implement

- [x] canvas ์์๋ฅผ ์ด์ฉํ์ฌ ๊ทธ๋ฆผํ ๊ธฐ๋ฅ ๊ตฌํ
- [x] paint, fill ๋ชจ๋๋ก ๋๋์ด ํด๋นํ๋ ๋ชจ๋์ ๋ง๊ฒ ๊ทธ๋ฆฌ๊ธฐ ๊ตฌํ
- [x] ์์ ๋ณ๊ฒฝ , ํ์ฌ ์์ ํ์
- [x] ํ ๋๊ป ์กฐ์  ๊ธฐ๋ฅ
- [x] ์ด๋ฏธ์ง ์ ์ฅ๊ธฐ๋ฅ(.png)

<br>

# Solution

- canvas ์ getContext() ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ ๊ทธ๋ฆผํ ๊ธฐ๋ฅ ๊ตฌํ

```js
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

// ๋ผ์ธ๊ทธ๋ฆฌ๊ธฐ
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

// ์บ๋ฒ์ค ์น ํ๊ธฐ
const handleFilling = () => {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);
  }
};
```

<br>

- ๋ฒํผ ํด๋ฆญ์ ํด๋นํ๋ ๋ชจ๋๋ก ์ฌ์ฉ๊ฐ๋ฅํ๊ณ  border ์์์ ๋ฐ๋ก ์ฃผ์ด ํ์ฌ ์ด๋ค ๋ชจ๋์ธ์ง ์ ์ ์๊ฒ ๊ตฌํํ์๋ค.

```js
// ์น ํ๊ธฐ ๋ชจ๋
const handleFillMode = () => {
  if (!filling) {
    filling = true;
    fillButton.style.border = '3px solid red';
    fillCurrentColor.style.display = 'block';
    paintButton.style.border = '1px solid #dfdfde';
    paintCurrentColor.style.display = 'none';
  }
};

// ๊ทธ๋ฆฌ๊ธฐ ๋ชจ๋
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

- ์์ ํ๋ ํธ๋ฅผ ํด๋ฆญํ๋ฉด ํด๋นํ๋ ์์์ผ๋ก ์์ด ๋ณ๊ฒฝ๋๊ณ , ํ์ฌ ์์์ ํด๋น ๋ชจ๋ ๋ฒํผ ์์ ๋ณด์ฌ์ฃผ์๋ค.

```js
// ์ ๋ณ๊ฒฝ
const changeColor = (e) => {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  paintCurrentColor.style.backgroundColor = color;
  fillCurrentColor.style.backgroundColor = color;
};
```

<br>

- canvas ์ฐํด๋ฆญ์ ๋ง๊ณ , toDataURL() ํจ์๋ฅผ ์ด์ฉํ์ฌ save ๋ฒํผ ํด๋ฆญ์ ์ด๋ฏธ์ง ์ ์ฅ ๊ธฐ๋ฅ์ ๊ตฌํํ์๋ค.

```js
// ์บ๋ฒ์ค ์ฐํด๋ฆญ ์ ํ
const handleRightClick = (e) => {
  e.preventDefault();
};

//์ด๋ฏธ์ง ์ ์ฅ
const handleImageSave = () => {
  const src = canvas.toDataURL(); // png ํ์ผ์ ์ฅ
  const a = document.createElement('a');
  a.href = src;
  a.download = '[Paint๐จ]';
  a.click();
};
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/170302075-0cba201c-6040-48f6-8e8d-00b85ed88e4d.gif">
