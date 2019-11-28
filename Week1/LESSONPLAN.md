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
1. Create an HTML form element
2. Create an HTML input(type text) element and set its placeholder as "First Name"
3. Create another HTML input(type text) element and set its placeholder as "Last Name"
4. Add both these elements to the form element
5. Create a button element and add these properties to it:

    a. Set its text to "Click Me"

    b. Set its id to "button"

    c. Set its type to "button"

6. Add button element to the form
7. Add the form element to main element
### Essence

SECOND HALF (14.00 - 16.00)

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
