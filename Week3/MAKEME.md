# Homework Week 3

```
Topics discussed this week:
• Closures
• Scope
• Callbacks
```

> [Here](https://github.com/HackYourFuture/JavaScript3/tree/master/Week1) you find the readings you have to complete before the first JavaScript3 lecture.

## Step 1: Read

> Read:

- JavaScript : [Closures](http://conceptf1.blogspot.nl/2012.11/javascript-closures.html)
- Everything you wanted to know about [JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
- JavaScript [Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
- 5 JavaScript [“Bad” Parts That Are Fixed In ES6](https://medium.freecodecamp.com/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81)

- More about [closures](https://www.reddit.com/r/learnjavascript/comments/1v6n8p/closure_explain_likei_am_in_high_school/?st=ixsp0mbe&sh=5526d150)
- A VERY popular [StackOverflow article](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

## Step 2: JavaScript

_Deadline Wednesday_

We learned a little bit about callbacks in JS. A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed. There is another function called `setTimeout` that will wait a specified period of time and then execute a function. For example:

```js
function doIt() {
  console.log('I am done');
}
setTimeout(doIt, 5000);
```

> If you run the above code it will wait 5 seconds and then print `I am done`. Please read something about setTimeout on MDN. The first argument to the `setTimeout` call is the callback (`doIt`).

**2.1** We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.

```js
function foo(func) {
  // What to do here?
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
```

**2.2** You must write a function that takes 4 arguments.

- A start value
- An end value
- A callback to call if the number is divisible by 3
- A callback to use if the number is divisible by 5

The function should first generate an array containing values from start value to end value (inclusive).

Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.

The function should call the second callback if the array value is divisible by 5.

Both functions should be called if the array value is divisible by both 3 and 5.

```js
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
}

threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,12.14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you start coding
```

> Note: The following assignments include some problems from _freeCodeCamp_. Note that some _freeCodeCamp_ examples still mention `var`. However you can safely replace them with `let` and `const` as appropriate.

**2.3** Please solve this problem:

> [Basic Algorithm Scripting: Repeat a String Repeat a String](https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string)

_2.3.1_: with a `for` loop.  
_2.3.2_: with a `while` loop.  
_2.3.3_: with a `do...while` loop.

**2.4** Some practice with objects:

> [Object Oriented Programming: Define a Constructor Function](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function)<br> > [Object Oriented Programming: Use a Constructor to Create Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects)

**2.5** Nested loops

> [Basic JavaScript: Nesting For Loops
> ](https://www.freecodecamp.com/challenges/nesting-for-loops)

**2.6** We did some work with arrays:

```js
const arr = [1, 2, 3];
```

We can also nest arrays inside arrays like this:

```js
const arr2d = [[1, 2], [3, 4], [5, 6]];
```

(for math people you can think of this as a matrix)

How would you flatten out all the items of an array with 2 dimensions into a one-dimensional array? Flattening out the `arr2d` array above would result in:

```js
const flattenedArr = [1, 2, 3, 4, 5, 6];
```

How about 3 dimensions? How about with _K_ dimensions?
What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it.)

**2.7** Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

```js
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
```

If you are confused please run the code and then consult the Google for "javascript pass by value pass by reference"

## Step 3: Scope and Closures

_Deadline Saturday_

> Let's continue to learn a little more about scope and Closures.

Write a function that would allow you to do this:

```js
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

**Bonus**: Write a function takes this array `['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']` and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast as possible!

## Step 4: Run the unit tests

To run the unit test for the week 3 homework, open a terminal window in the `JavaScript2` folder and type

```
npm run test-week3
```

In case of errors, try and fix them. When done, run the tests again: `npm run test3`

Repeat the previous step until all tests pass.

## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](https://github.com/HackYourFuture/JavaScript3/tree/master/Week1) to prepare for your next class

### How to hand in your homework:

Go over your homework one last time:

- Does your homework pass all the unit tests?
- Does every file start with `'use strict';`?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Have you resolved all issues flagged by ESLint and the spell checker (no wavy red and green underlines in VSCode)?

If the answer is 'yes' to all preceding questions you are ready to follow these instructions:

- [Handing in homework](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/homework_pr.md)
