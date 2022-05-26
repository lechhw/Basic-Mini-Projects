const toDoForm = document.querySelector('.input-form');
const input = toDoForm.querySelector('.input');
const inputButton = toDoForm.querySelector('.input-button');
const toDoList = document.querySelector('.todo-list');

const handleDelete = (e) => {
  const deleteToDo = e.target.parentElement;
  toDoList.removeChild(deleteToDo);
};

const renderToDo = (newToDo) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);

  li.classList.add('todo-item');
  button.classList.add('delete-button');

  span.innerText = newToDo;
  button.innerText = 'x';

  button.addEventListener('click', handleDelete);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newToDo = input.value;
  input.value = '';

  renderToDo(newToDo);
};

toDoForm.addEventListener('submit', handleSubmit);
