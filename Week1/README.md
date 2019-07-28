# Reading Material JavaScript2 Week 1

## Agenda

These are the topics for week 1:

1. What is a browser?
   - How a browser works
   - Different browsers
2. What is the Document-Object Model (DOM)?
   - JavaScript and the browser
   - The DOM
   - The Critical Rendering Path
   - Traversing the DOM
3. What is DOM Manipulation?
   - Browser events
   - Event listeners and handlers

[DOM Crash Course](https://www.youtube.com/playlist?list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s)

## 1. What is a browser?

A browser is software that allows you to access websites.

### How a browser works

[How a web browser functions](https://www.youtube.com/watch?v=z0HN-fG6oT4)

## 2. What is the Document-Object Model (DOM)?

### JavaScript and the browser

As we've learned in the previous module, JavaScript is a programming language. It allows you to write logical rules that the computer can execute in order to solve a problem. However, saying that the 'computer' executes it is actually inaccurate. There are two specific softwares that execute JavaScript: **the browser** and **Node.js**. We'll talk about the latter in a different module.

The browser is software that has been build to understand JavaScript ((and HTML/CSS)). Each different browser (Chrome, Firefox, Safari, etc.) has, behind the scenes, a **JavaScript engine** that works to transform the JavaScript code that you write into code that the computer understands.

- [How the JavaScript engine works](https://www.youtube.com/watch?v=KM9coMpy5sQ)

Every programming language sits at a certain level of abstraction, relative to the only real language a computer understands: machine code (which is only 0's and 1's). For more information on this, check out the following [video](https://www.youtube.com/watch?v=bUWCD45qniA)

For our purposes, it's only important to understand that the browser looks at JavaScript and then does what it's instructed to do: add elements, modify text or media files, etc. That's the purpose of JavaScript in the browser: to add interactivity based off of the user's behavior.

- [JavaScript, the Browser, and the DOM](https://www.youtube.com/watch?v=31ViueuIXGE)

## The DOM

JavaScript is made accessible to the DOM by embedding it into an HTML file. You might've seen the <script></script> before; well, this is how the browser becomes aware of JavaScript.

- [What exactly is the DOM](https://bitsofco.de/what-exactly-is-the-dom/)
- [JavaScript and the browser](https://eloquentjavascript.net/13_browser.html)

## The Critical Rendering Path

The actual process of transforming HTML, CSS and JavaScript into a user-viewable version of a webpage is called **the Critical Rendering Path**.

- [Understanding the Critical Rendering Path](https://bitsofco.de/understanding-the-critical-rendering-path/)

### Traversing the DOM

Traversing the DOM essential means: using JavaScript to select certain elements within the DOM in order to modify them (change color, size or make them disappear, for example). The modification of elements is also known as **DOM manipulation**.

Learning how to write JavaScript that targets the DOM is an essential part of being a web developer. In the following resources

- [Traversing the DOM with JavaScript](https://zellwk.com/blog/dom-traversals/)
- [JavaScript DOM Crash Course - Part 2](https://www.youtube.com/watch?v=mPd2aJXCZ2g)

## 3. What is DOM Manipulation?

### Browser events

Browser events are very much like real-life events: they are important things that happen. In real-life this could be getting a job, graduating from school or receiving a birthday gift. In terms of the browser, this is much more small scale: user actions like `clicking`, `scrolling` or `typing` are all considered events.

These events are important to know about, because based on those we manipulate the DOM. It's cause and effect: user clicks on an image and as a result it, for example, increases in size.

- [What are browser events?](https://www.youtube.com/watch?v=LeKKU3a4AQo)
- [JavaScript DOM Crash Course - Part 3](https://www.youtube.com/watch?v=wK2cBMcDTss)

### Event listeners and handlers

The process of DOM manipulation happens in three steps:

(1) an event happens ("User clicks on a button")
(2) JavaScript is aware and looking for this specific user action
(3) JavaScript modifies the DOM as a result ("The button disappears and is replaced by an image")

The second step is called **listening for the event**. We do this by using a by the browser predefined function called `addEventListener()`, which we get from the `document` object.

The third and final step is called **handling the event**. The term "handler" effectively means "taking care of" the event; the response to the event. The handler itself is nothing more than a function that executes more JavaScript code in order to manipulate a particular part of the page (either the element that experienced the event or a totally different part of the page).

- [JavaScript Events Tutorial](https://www.youtube.com/watch?v=e57ReoUn6kM)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
