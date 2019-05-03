console.log('Hack your future, right?!');

const header = document.querySelector('h1');
console.log('header: ', header);

// document.querySelector('button id="btn-changeImage"');
//exercise 1:
const botton1 = document.getElementById("btn-changeImage")

botton1.addEventListener('click', function() {
    console.log('it is selected');
    }
)

const changeIt = () => {
    const old = document.getElementById("imageToChange");
    console.log(old);
    const newurl = document.getElementById("imageInput").value;
    console.log(newurl);
    old.src = newurl;
}

botton1.addEventListener('click' , changeIt)

// Exercise 2:

const botton2 = document.querySelector('#btn-addTodo');

const addtodo = () => {
    var todoList = document.getElementById('todoList');
    const todoInput = document.querySelector('#todoInput');
    console.log(todoInput.value);   
    var todoElement = document.createElement('li');
    todoElement.innerHTML = todoInput.value;
    todoList.appendChild(todoElement);
    todoInput.value = ''; //after clicking' the text input should disappear, i think...
}

botton2.addEventListener('click' , addtodo)


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
// ====================================== //
