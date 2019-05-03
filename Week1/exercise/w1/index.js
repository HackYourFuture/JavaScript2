console.log('Hack your future, right?!');

const header = document.querySelector('h1');
console.log('header: ', header);

// EXERCISE:
// select "change image" button (querySelector)
// add click event listener
// execute changeImage() function on click event
// define changeImage() function
// in this function:
//    get image element
//    get imageInput element
//    log input value
//    set image src to imageInput element value

const changeImageButton = document.querySelector('#btn-changeImage')
const changeImage = () => {
    const image = document.getElementById("imageToChange");
    const imageInput = document.getElementById("imageInput");
    image.src = 'https://www.nieuwsbladtransport.nl/wp-content/uploads/2019/03/big-data-cyber-security-hack.jpg';
}

changeImageButton.addEventListener("click", changeImage)

// ====================================== //

// BONUS:
// select "add todo" button (querySelector)
// add click event listener
// execute addTodo() function on click event
// define addTodo() function
// in this function:
//    get todoList element
//    get todoInput element
//    log todoInput element value
//    create <li> element
//    set <li> element innerHtml to todoInput value
//    add <li> element to todoList

const addTodoButton = document.querySelector("#btn-addTodo");
const addTodo = () => {

    const todoList = document.getElementById("todoList");
    const todoInput = document.getElementById("todoInput");
    const creatLi = document.createElement('li');
    creatLi.innerHTML = todoInput.value;
    todoList.appendChild(creatLi);
};

addTodoButton.addEventListener("click", addTodo);
