const header = document.querySelector('.header');
const itemList = document.querySelectorAll('.item-list');

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

itemList.forEach((list) => {
  list.addEventListener('mouseover', () => {
    list.classList.add('show');
  });
  list.addEventListener('mouseout', () => {
    list.classList.remove('show');
  });
});
