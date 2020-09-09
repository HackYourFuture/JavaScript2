# Lesson Plan JavaScript2 Week 2

## Agenda

The purpose of this class is to introduce to the student:

- What synchronous vs. asynchronous processes are
- What callbacks are and how to write your own
- How the event loop works
- Show 3 commonly used array functions (filter, reduce, map)

## Core concepts

FIRST HALF (12.00 - 13.30)

## 1. Q&A about last week's concepts & homework

- DOM
- DOM manipulation
- browser defined functions

Note: You can ask students to explain a concept or summerise the last lecture themselves

## 2. What synchronous vs. asynchronous processes are

### Explanation

### Example

### Exercise

### Essence

Notes:

- Synchronous refers to a linear execution process: one step at a time
- Asynchronous helps us do multiple things in parallel

## 3. Callbacks

### Explanation

A callback in JavaScript is basically a function(callback) being passed as a parameter to another function which after some point of time would execute the function passed or invoke the callback.

Callbacks were primarily introduced in JavaScript to achieve asynchronous behaviour
(https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

### Example

Consider a situation where person A wishes to go out for a movie with a friend person B one evening. Person A finds out the time and place and now needs to share it with B. A picks up the phone and tries to call B. Let's say that B is currently busy with some work and can't answer the phone. Person A has now got two options. One option is to stay on the line until B picks up the phone and then share the movie details. Or A could drop a voicemail and ask B to **callback** once free.

```javascript
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished() {
  alert('Finished my homework');
}
doHomework('math', alertFinished);
```

more examples (made by Yash): https://github.com/HackYourFuture/JavaScript2/blob/master/assets/callbacks.js

### Exercise

#### 1. What will happen?

#### 2. How to turn the output order around?

```javascript
function first() {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}

first();
second();
```

### Essence

you can’t just call one function after another and hope they execute in the right order. Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

SECOND HALF (14.00 - 16.00)

## 4. Event loops

### Explanation

https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/event_loop.md

### Example

```Javascript
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}


foo()
```

Output:

```Javascript
foo
bar
baz
```

Call stack
![Call Stack](../assets/call_stack_example.png)

### Exercise

> [Visualisation of an eventloop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### Essence

## 5. filter, reduce, map

### Explanation

**map**, **filter** and **reduce** are three array methods that iterate (loop!) over the whole array and preform a computation or a transformation.
They have in common that they return a new array based on the transformations/calculations.

> [MDN definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): The **map()** method creates a new array with the results of calling a provided function on every element in the calling array.

> [MDN definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter): The **filter()** method creates a new array with all elements that pass the test implemented by the provided function

> [MDN definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce): The **reduce()** method executes a **reducer** function (that you provide) on each member of the array resulting in a single output value†.

Writing the functions yourself: https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/map_filter.md

### Example

```Javascript
const numbers = [1, 2, 3, 4];
const square = x => x * x;
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // -> [ 1, 4, 9, 16 ]
```

```Javascript
const numbers = [1, 2, 3, 2];
const isTwo = x => x === 2;
const Twos = numbers.filter(isTwo);

console.log(Twos); // -> [ 2, 4 ]
```

```Javascript
const numbers = [1, 2, 3, 4];

const sum = (a, b) => a + b;
const total = numbers.xxx(sum, 0);

console.log(total); // -> 10
```

### Exercise

Fill in the xxx with map, filter or reduce:

```Javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.xxx(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]
```

```Javascript
const numbers = [1, 2, 3, 4];

const times = (a, b) => a * b;
const total = numbers.xxx(times, 0);

console.log(total); // -> 10
```

```Javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.xxx(item => item % 2 === 0);
console.log(evens); // [2, 4]
```

Yash made a very nice exercise (with answers):
https://github.com/yash-kapila/HYF-JS2-Week2/tree/master/src

### Essence

Easy methodes to transform arrays, wich you'll have to do quite often, while keeping the original array intact.
You can see it as a shortcut. Of course you can write these methodes yourself many times, but 'they' already did it for you
