# Lesson Plan JavaScript2 Week 1

## Agenda
Is this your first lecture for this class?
Please introduce yourself briefly.
  - Job
  - Education
  - City
  - Why you love programming (if you do)
  
The purpose of this class is to introduce to the student:
- How a webpage is made up of objects (DOM)
- How JavaScript can be used to manipulate those objects (DOM manipulation)
- Show a list of commonly used browser defined functions
- How to combine add and remove DOM elements

## Core concepts

FIRST HALF (12.00 - 13.30)

## 1. Document Object Model (DOM)

### Explanation
The [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is an _object-oriented representation_ of a web page(HTML document) which the web browsers make available to JavaScript for manipulation. Inside a JavaScript file, we can access the DOM through a global object called `document` or `window.document`.

 **It is not a programming language but without it JavaScript would not have any knowledge of our web page/HTML document.**
### Example
   ```HTML
    <!DOCTYPE html>
    <html>
    <head>
      <title>My title</title>
    </head>

    <body>
      <h1>My header</h1>
      <a href="https://www.w3schools.com/js/pic_htmltree.gif">My link</a>
    </body>
    </html>
   ```

  ![Pictorial Representation of DOM](https://www.w3schools.com/js/pic_htmltree.gif)
### Exercise
### Essence


## 2. DOM manipulation
### Explanation
### Example

1. Finding DOM elements in HTML page
    - `document.getElementById(id)` - Find an element by element id
    - `document.getElementsByTagName(name)` - Find elements by tag name
    - `document.getElementsByClassName(name)` - Find elements by class name
    - `document.querySelector(selector)` - Find a single element that matches a css-like selector
    - `document.querySelectorAll(selector)` - Find all elements  that matche a css-like selector

2. Adding and Deleting elements in HTML page
    - `document.createElement(element)` - Create a new HTML element
    - `document.removeChild(element)` - Remove an HTML element
    - `document.appendChild(element)` - Add an HTML element
    
3. Changing existing HTML elements
    - `element.innerHTML` - Change the content/layout of the element
    - `element.innerText` - Change just the text of the element
    - `element.setAttribute(attribute, value)` - Set/Change attribute of an element

* Note: `getElementsByTagName` and `getElementsByClassName` returns a list of all matched elements. However, this is not the usual JavaScript array but an HTMLCollection List. A detailed list of APIs available on the DOM can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Document).
### Exercise

**Exercise Option 1**
1. Create an HTML form element
2. Create an HTML input(type text) element and set its placeholder as "Name"
3. Add both these elements to the form element
4. Create a button element and add these properties to it:

    a. Set its text to "Click Me"

    b. Set its id to "button"

    c. Set its type to "button"

5. Add button element to the form
6. Add the form element to the body element

**Exercise Option 2**
Given the following HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container" class="main-section extra">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>
```
Write the code necessary to do the following:

1. Select the section with an id of container using querySelector.  
2. Select all of the list items with a class of "second".  
3. Select a list item with a class of third, but only the list item inside of the ol tag.  
4. Give the section with an id of container the text "Hello!".  
5. Add the class main to the div with a class of footer.  
6. Remove the class extra on the div  with id container.  
7. Create a new li element.  
8. Give the li the text "four".  
9. Append the li to the ul element.  
10. Loop over all of the lis inside the ol tag and give them a background color of "green".  
11. Remove the div with a class of footer.  

### Essence

SECOND HALF (14.00 - 16.00)

## 3. Event listeners

### Explanation

Give analogy.


### Example
Start with the following javascript:

```
let h1 = document.createElement('h1');
h1.innerText = 'Oscar nominations';
let form = document.createElement('form');
let name = document.createElement('input');
nameTxt.setAttribute('type','text');
nameTxt.setAttribute('value','movie name');
let btn = document.createElement('input');
btn.setAttribute("type","button");
btn.setAttribute('value','Click Me');
form.appendChild(nameTxt);
form.appendChild(btn);
let ol = document.createElement('ol');
let mainDiv = document.createElement('div');
mainDiv.appendChild(h1);
mainDiv.appendChild(form);
mainDiv.appendChild(ol);
document.body.appendChild(mainDiv);
```
Briefly explain what the javascript does.
Add an event listener to button that creates and appends the name to the list.
```
btn.addEventListener('click', () => {
  let li = document.createElement('li');
  list.innerText = nameTxt.value;
  ol.appendChild(li);
});
```
Demonstrate what it does. Show where to see event listeners in dev tools.


### Exercise

Students should add a button for each `li` that can be used to remove that name from the list.

The goal is for students to learn about the click event handler arguments.

## 3. Show a list of commonly used browser defined functions
### Explanation
### Example
### Exercise
### Essence

## 4. How to combine add and remove DOM elements
### Explanation
### Example
### Exercise
### Essence
