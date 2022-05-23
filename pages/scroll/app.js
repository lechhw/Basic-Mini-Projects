const buttonList = document.querySelectorAll('.button');

function handleScroll(e) {
  if (e.target.innerText === '100px Down') {
    window.scrollBy(0, 100);
  } else if (e.target.innerText === '100px Up') {
    window.scrollBy(0, -100);
  } else if (e.target.innerText === 'Move Point') {
    const point = document.querySelector('.item.point');
    window.scrollBy({
      top: point.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  } else if (e.target.innerText === 'Move Top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else if (e.target.innerText === 'Move Bottom') {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
}

buttonList.forEach((button) => button.addEventListener('click', handleScroll));
