console.log('Hack your future, right?!');

const header = document.querySelector('h1');
console.log('header: ', header);

// select "change image" button (querySelector)
const changeImageButton = document.querySelector("#btn-changeImage");
console.log("changeImageButton",changeImageButton);

// define changeImage() function
const changeImage= () => {

    //    get image element
    const image = document.getElementById("imageToChange");
    console.log("image:" + image);

    //    get imageInput element
    const imageInput = document.getElementById("imageInput");

    //    set image src to imageInput element value
    image.src = imageInput.value;

    //    log input value
    console.log("imageInput:" + imageInput.value);
}

// add click event listener
// execute changeImage() function on click event
changeImageButton.addEventListener("click", changeImage)

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

// ====================================== //

// BONUS:
// select "add todo" button (querySelector)
const addTodoButton = document.querySelector("#btn-addTodo");
//console.log("addTodoButton",addTodoButton);

// define addTodo() function
// in this function:
const addTodo = () =>{

    //    get todoList element
    const todoList = document.getElementById("todoList");
    //console.log("todoList:" + todoList); 

    //    get todoInput element
    const todoInput = document.getElementById("todoInput");

    //    log todoInput element value
    console.log("todoInput:" + todoInput.value); 
    
    //    create <li> element
    const creatLi = document.createElement('li');

    //    set <li> element innerHtml to todoInput value
    creatLi.innerHTML = todoInput.value;
    //console.log(creatLi);

    //    add <li> element to todoList
    todoList.appendChild(creatLi);
};

// add click event listener
// execute addTodo() function on click event
addTodoButton.addEventListener("click", addTodo);

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
