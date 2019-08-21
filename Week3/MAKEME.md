# Homework JavaScript2 Week 3

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT:

## **1. Practice the concepts**

## **2. JavaScript exercises**

### Scope/closure exercises

**Exercise 1: Add six**

Write a function that would allow you to do this:

```js
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

**Exercise 2: asds**

Write a function takes this array `['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']` and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number).

**Exercise 3: Guess the output**

In this exercise you'll be presented with 3 code snippets. Your task to is guess the output and write out your reasoning, for each single one, in 50 words or less.

```js
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();
```

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

**Exercise 4: Make the sandwich**

Mrs Potts the school dinner lady is tired of all the global sandwich variables getting under her feet and tripping her up all the time. She needs help cleaning her kitchen. Will you help her?

She would like it very much if you would build a sandwich machine for her, but wrap it in a closure so as to keep everything neat.

1. Create a self executing function
2. Within the closure, create three little functions to add the bread, spread the soya margarine and add the jam. These little methods should use console.log to write a string representing their action to the DOM, e.g. "Now spreading the jam!"
3. Assign makeSandwich to the global window object, thus smuggling it out of the closure.
4. Call makeSandwich from outside the closure

It should log to the console the following message:

```markdown
Adding bread
Now spreading the soya magarine
Spreading jam
```

**Exercise 5**

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

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you start coding
```

> Note: The following assignments include some problems from _freeCodeCamp_. Note that some _freeCodeCamp_ examples still mention `var`. However you can safely replace them with `let` and `const` as appropriate.

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

## **3. Code along**

- [Build a Booklist App](https://www.youtube.com/watch?v=JaMCxVWtW58)

## **4. PROJECT:**

## **SUBMIT YOUR HOMEWORK!**

Finished? Good on you! The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT:

Upload both to your forked JavaScript2 repository in GitHub. Make a pull request to the original repository.

> Forgotten how to upload your homework? Go through the [guide](../hand-in-homework-guide.md) to learn how to do this again.

_Deadline Saturday 23.59 CET_
