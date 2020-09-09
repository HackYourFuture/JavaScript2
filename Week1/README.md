# Reading Material JavaScript2 Week 1

## Agenda

These are the topics for week 1:

1. What is a web browser?
   - How a browser works
   - Different browsers work differently
2. What is the Document-Object Model (DOM)?
   - JavaScript and the browser
   - The DOM
   - The Critical Rendering Path
   - Traversing the DOM
3. What is DOM Manipulation?

   - Manipulating elements
   - Browser events
   - Event listeners and handlers

## 0. Video Lectures

Your teacher Wilgert has made video lectures for this week's material. You can find them here: [Videos 1 - 10](https://www.youtube.com/playlist?list=PLVYDhqbgYpYU-7_oyPBkUuuis5bL1Dk8n)

<a href="https://www.youtube.com/playlist?list=PLVYDhqbgYpYU-7_oyPBkUuuis5bL1Dk8n" target="_blank"><img src="../assets/wilgert.png" width="600" height="350" alt="HYF Video" /></a>

## 1. What is a web browser?

A web browser is software that allows you to access websites.

### How a browser works

In your journey into becoming a web developer it's important to know the tools you'll be using intimately. One such is the browser, which will be used to display your websites. In the following resources you'll learn about the many parts any web browser consists of and what their use is:

- [How a web browser functions](https://www.youtube.com/watch?v=z0HN-fG6oT4)
- [How do web browsers work?](https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509)

### Different browsers work differently

A website, ultimately is a set of instructions describing how a series of webpages should look. It's up to the browser to render it by reading the code from your HTML/CSS and JavaScript files. There are, however, differences in the code interpretation of the different browsers, thus making the output look differently.

That's why you should check the way your website looks on different browsers during the development of your website. This is called making it **cross browser compatible**>

You can use the following online tool in order see how your pages look on multiple browsers:

- [Browsershots](http://browsershots.org)

A good website should look and function the same in any browser.

Unfortunately, there is no easy solution for that. You should check the specificities of each browser that fails to display your website correctly and make the necessary adjustments to your code. Such compatibility issues may occur not only in different browsers but because of an old browser version which does not support completely the latest standards.

This is because browser development doesn't go at the same speed as programming language development. More often than not, the web technologies you're using will have more features you as a developer can make use of than the browser can currently handle. This is important to keep in mind.

When you do your styling, especially, it's important to know if a certain browser (and browser version) is even able to understand it. A helpful tool in identifying this is a website called **caniuse.com**:

- [caniuse](https://caniuse.com/)
- [Check HTML5/CSS3 Support with CANIUSE.COM](https://www.youtube.com/watch?v=el7McMP8CB8)

Generally speaking, you want to support as many browsers (and browser versions) with your code as possible.

For more research, check out the following resources:

- [Dealing with Cross Browser Compatibility](https://www.youtube.com/watch?v=9tEixRJ3GeI)
- [Understanding The Stacking Context for Cross Browser Compatibility](https://medium.com/@mattcroak718/understanding-the-stacking-context-for-cross-browser-compatibility-2b21db1cf621)

## 2. What is the Document-Object Model (DOM)?

### JavaScript and the browser

As we've learned in the previous module, JavaScript is a programming language. It allows you to write logical rules that the computer can execute in order to solve a problem. However, saying that the 'computer' executes it is actually inaccurate. There are two specific softwares that execute JavaScript: **the browser** and **Node.js**. We'll talk about the latter in a different module.

The browser is software that has been build to understand JavaScript ((and HTML/CSS)). Each different browser (Chrome, Firefox, Safari, etc.) has, behind the scenes, a **JavaScript engine** that works to transform the JavaScript code that you write into code that the computer understands.

- [How the JavaScript engine works](https://www.youtube.com/watch?v=KM9coMpy5sQ)

Every programming language sits at a certain level of abstraction, relative to the only real language a computer understands: machine code (which is only 0's and 1's). For more information on this, check out the following [video](https://www.youtube.com/watch?v=bUWCD45qniA)

For our purposes, it's only important to understand that the browser looks at JavaScript and then does what it's instructed to do: add elements, modify text or media files, etc. That's the purpose of JavaScript in the browser: to add interactivity based off of the user's behavior.

- [JavaScript, the Browser, and the DOM](https://www.youtube.com/watch?v=31ViueuIXGE)

### The DOM

The Document-Object Model (DOM) is a tree-like representation of the structure of a webpage. The following is a simple example:

![Simple DOM](./../assets/simple-dom.png)

JavaScript is made accessible to the DOM by embedding it into an HTML file. You might've seen the `<script></script>` before; well, this is how the browser becomes aware of JavaScript.

- [What exactly is the DOM](https://bitsofco.de/what-exactly-is-the-dom/)
- [JavaScript and the browser](https://eloquentjavascript.net/13_browser.html)
- [JavaScript DOM Crash Course - Part 1](https://www.youtube.com/watch?v=0ik6X4DJKCc)

### The Critical Rendering Path

The actual process of transforming HTML, CSS and JavaScript into a user-viewable version of a webpage is called **the Critical Rendering Path**.

- [Understanding the Critical Rendering Path](https://bitsofco.de/understanding-the-critical-rendering-path/)

## 3. What is DOM Manipulation?

**DOM manipulation** refers to the activity of selecting and modifying DOM elements. The main reason why this is done is that **you want to show the user different things depending their activity**, for example if you click on a [hamburger menu icon](https://bit.ly/2Yr4O7Z) and a navigation menu slides in.

Finding the right elements is called **traversing the DOM**. Traversing the DOM essential means: using JavaScript to select certain elements within the DOM in order to modify them (change color, size or make them disappear, for example).

### Manipulating elements

Look at the following code sample:

```js
const body = document.querySelector('body'); // you can also use 'document.body'
const newParagraph = document.createElement('p');
newParagraph.innerText = 'This paragraph will be added to the body!';
newParagraph.style.background = 'red';
body.appendChild(newParagraph);
```

In this example we're executing the following steps:

1. Selecting the body: this is always necessary, as we can only add or remove elements from the body of the document
2. Creating a new DOM element: a paragraph i.e. a `<p>` element
3. Injecting content into the newly create paragraph element
4. Setting the background color for the newly create paragraph element
5. Adding the  newly create paragraph element element to the body

Test this code out by copying and pasting it in the Developer Console of your browser. After you've pressed the Enter/Return key you will find your new `<p>` at the end of the page!

Learning how to write JavaScript that targets the DOM is an essential part of being a web developer. In the following resources you'll more about how to do that:

- [Traversing the DOM with JavaScript](https://zellwk.com/blog/dom-traversals/)
- [JavaScript DOM Crash Course - Part 2](https://www.youtube.com/watch?v=mPd2aJXCZ2g)

### Browser events

Browser events (also known as DOM events) are very much like real-life events: they are important things that happen. In real-life this could be getting a job, graduating from school or receiving a birthday gift. In terms of the browser, this is much more small scale: user actions like `clicking`, `scrolling` or `typing` are all considered events.

These events are important to know about, because based on those we manipulate the DOM. For example, user clicks on an image and as a result it increases in size.

Effectively it's cause and effect.

Check out the following resources to learn more about what events there are, and what you can do to manipulate elements after an event has happened:

- [What are browser events?](https://www.youtube.com/watch?v=LeKKU3a4AQo)
- [Introduction to browser events](https://javascript.info/introduction-browser-events)
- [JavaScript DOM Crash Course - Part 3](https://www.youtube.com/watch?v=wK2cBMcDTss)

### Event listeners and handlers

Take a look at this code:

```js
const body = document.querySelector('body');
body.addEventListener('click', function () {
  body.style.background = 'black';
});
```

Test this code out by copying and pasting it in the Developer Console of your browser. After you've pressed the Enter/Return click the website. You should see the whole `<body>` becoming black!

This is DOM manipulation in its simplest form. It goes in three essential steps:

(1) An event happens ("User clicks on the page")
(2) JavaScript is aware and looks for this specific user action (The browser is listening for the event, in this case a `click` event)
(3) JavaScript modifies the DOM as a result (A function that makes the body background color black is executed)

The second step is called **listening for the event**. We do this by using a by the browser predefined function called `addEventListener()`, which we get from the `document` object in the browser. The browser needs to listen to the event in order to know what it should do ("make the body background color black") in case a certain event (`click`) happens to a certain element (`body`).

The third and final step is called **handling the event**. The term "handler" effectively means "taking care of" the event; the response to the event. The handler itself is nothing more than a function that executes more JavaScript code in order to manipulate a particular part of the page (either the element that experienced the event or a totally different part of the page).

- [Events in JavaScript](https://www.youtube.com/watch?v=7UstS0hsHgI)
- [JavaScript Events Tutorial](https://www.youtube.com/watch?v=e57ReoUn6kM)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
