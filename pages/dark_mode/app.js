const button = document.querySelector('.button');
const container = document.querySelector('.container');

function toggleDarkMode() {
  container.classList.toggle('dark');
  if (container.classList.contains('dark')) {
    button.innerText = 'White';
  } else {
    button.innerText = 'Dark';
  }
}

button.addEventListener('click', toggleDarkMode);
