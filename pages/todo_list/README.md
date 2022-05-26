# Project 10. To Do List

<br>

# Implement

- [x] 기본 todo list 구현하기

<br>

# Solution

- createElement() 을 사용하여 todo-item 인 li 를 만들고 todo-list 의 자식요소로 추가해준다.

```js
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
```

<br>

- delete 버튼 클릭시 해당하는 버튼의 부모 요소인 li 를 todo-list 에서 제거한다.

```js
const handleDelete = (e) => {
  const deleteToDo = e.target.parentElement;
  toDoList.removeChild(deleteToDo);
};
```

<br>

# Result

<img src="https://user-images.githubusercontent.com/99241230/170471957-c752c92d-fc63-4111-955d-24474e5bb9bb.gif">
