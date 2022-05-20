# Project 03. Navigation Bar

<br>

# Implement

- [x] menu 에 마우스 를 올리면 서브메뉴 dropdown 형식으로 보여주기

<br>

# Solution

- 마우스를 빨리 움직이면 menuItem 을 인식을 못하고 'Cannot read properties of null' 에러가 발생했다. 그래서 초깃값이 null 인 opened 라는 변수를 만들어 handleToggle(menuItem) 실행 후에 opened 에 menuItem 값을 넣고, 다른 메뉴로 이동시에는 opened 에 값이 있으면 그 값을 보여주는 동시에 현재 이동한 menuItem을 다시 opened 에 넣어주면서 마우스를 움직일때마다 opened 를 체크하는 로직으로 작성하여 에러를 막았다.

```js
let opened = null;

const handleToggle = (menuItem) => {
  menuItem.classList.toggle('show');
};

const handleDropDown = (menu) => {
  const menuItem = menu.parentNode.lastChild.previousSibling;
  handleToggle(menuItem);

  if (opened == null) {
    opened = menuItem;
  } else {
    handleToggle(opened);
    opened = menuItem;
  }
};

const onMouseOver = (e) => {
  if (e.target.className.includes('menu')) {
    handleDropDown(e.target);
  } else if (opened) {
    handleToggle(opened);
    opened = null;
  }
};

header.addEventListener('mouseover', onMouseOver);
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/169455190-0f1e82ee-bcf6-490d-a660-f44a9be4fd8e.gif">
