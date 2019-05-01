'use strict';
// EXERCISE:
const selectButtonChangeImage = document.getElementById('btn-changeImage');

  const changeImage = () => {
  const selectImage = document.querySelector('img');
  const selectImageInput = document.getElementById('imageInput');
  console.log(selectImageInput.value);
  selectImage.src = selectImageInput.value;
  }
  document.querySelector("#btn-changeImage").addEventListener("click", changeImage);

// ====================================== //
// BONUS:

const getToDoButton = document.querySelector('#btn-addTodo');
console.log(getToDoButton);
const addTodo = () => {
    const getTodoList = document.querySelector('#todoList');
    const getTodoInput = document.querySelector('#todoInput');
    console.log(getTodoInput.value);
    const createListElement = document.createElement('li');
    createListElement.innerHTML = getTodoInput.value;
    console.log(createListElement);
    getTodoList.appendChild(createListElement);
}
getToDoButton.addEventListener('click', addTodo);
