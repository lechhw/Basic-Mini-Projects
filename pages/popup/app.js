const popup = document.querySelector('.popup-overlay');
const openButton = document.querySelector('.open-popup');
const closeButton = document.querySelector('.popup .close-popup');

function openPopup() {
  popup.classList.add('open');
}
openButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('open');
}
closeButton.addEventListener('click', closePopup);
