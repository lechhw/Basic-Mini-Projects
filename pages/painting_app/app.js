const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const colorList = document.querySelectorAll('.color');
const paintButton = document.querySelector('.paint-button');
const paintCurrentColor = document.querySelector('.paint-mode .current-color');
const fillButton = document.querySelector('.fill-button');
const fillCurrentColor = document.querySelector('.fill-mode .current-color');
const range = document.querySelector('.range');
const saveButton = document.querySelector('.save-button');

const CANVAS_SIZE_WIDTH = 1000;
const CANVAS_SIZE_HEIGHT = 540;

let painting = false;
let filling = false;

canvas.width = CANVAS_SIZE_WIDTH;
canvas.height = CANVAS_SIZE_HEIGHT;

// 캔버스 기본 배경색
ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);

// 기본 두께
ctx.lineWidth = 3.0;

// 기본 색상
ctx.strokeStyle = '#2c2c2c';

const startPainting = () => {
  painting = true;
};

const stopPainting = () => {
  painting = false;
};

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

// 색 변경
const changeColor = (e) => {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  paintCurrentColor.style.backgroundColor = color;
  fillCurrentColor.style.backgroundColor = color;
};

// 캔버스 칠하기
const handleFilling = () => {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);
  }
};

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

// 라인 두께 변경
const changeLineWidth = (e) => {
  const value = e.target.value;
  ctx.lineWidth = value;
};

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

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mousemove', handlePainting);
canvas.addEventListener('click', handleFilling);
canvas.addEventListener('contextmenu', handleRightClick);

colorList.forEach((color) => {
  color.addEventListener('click', changeColor);
});

fillButton.addEventListener('click', handleFillMode);
paintButton.addEventListener('click', handlePaintMode);
range.addEventListener('input', changeLineWidth);
saveButton.addEventListener('click', handleImageSave);
