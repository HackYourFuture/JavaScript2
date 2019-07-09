console.log('Hack your future Belgium!');

// EXERCISE 1

// 1a: create a function called "changeHeader", put a console.log() inside this function to test
function changeHeader(){
    console.log('Testing this function');
}

// 1d: add an event listener to the "Change header" button 
//     and call the "changeHeader" function when clicked ( you should see your console.log() )
function changeHeader(){
    console.log("Hello Now the heading is Changed with Addeventlistner");

    var header= document.querySelector('header1');
    document.getElementById("header1").innerHTML="Kelemu";
    header = document.getElementById("header1").innerHTML;
}   
 
document.getElementById("headerChenger").addEventListener('click',changeHeader);

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name


// ====================================== //


// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

document.getElementById('btn-changeImage'). addEventListener('click',changeImage);

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src
function changeImage(){
    console.log('Im in the changeImage function');
    var imageInputValue = document.getElementById('imageInput').value;
    
    var imageToChange = document.getElementById('imageToChange').src;
   
    imageToChange = imageInputValue
    
    document.getElementById('imageToChange').src=imageToChange;
    }

// ====================================== //


// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

document.getElementById('btn-addTodo').addEventListener('click',addTodo);

// 3b: define addTodo() function, in this function:

function addTodo(){

    //get all lists of elements
    var alltodoList = document.getElementById('todoList');
    console.log(alltodoList);

   //Assigning imput data to the variable
    var todoInputvalue = document.getElementById('todoInput').value;
    console.log(todoInputvalue);

    //Creating li element
    var newListElement = document.createElement("li");

    //Assigning the new list value to the variable
    var newListValue = document.createTextNode(todoInputvalue);
    
    //merg the new value to the created list
    newListElement.append(newListValue);

    //Display the new element to the existing list
    document.getElementById('todoList').appendChild(newListElement);

 }

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList