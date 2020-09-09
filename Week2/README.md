# Reading Material JavaScript2 Week 2

## Agenda

These are the topics for week 2:

1. Synchronous vs. asynchronous
   - Synchronous
   - Asynchronous
2. Introducing asynchronicity using callbacks
   - Higher order functions
   - Functions as arguments to other functions
3. Array Functions
4. Event Loop

## 0. Video Lectures

Your teacher Wilgert has made video lectures for this week's material. You can find them here: [Videos 11 - 21](https://www.youtube.com/playlist?list=PLVYDhqbgYpYU-7_oyPBkUuuis5bL1Dk8n)

<a href="https://www.youtube.com/playlist?list=PLVYDhqbgYpYU-7_oyPBkUuuis5bL1Dk8n" target="_blank"><img src="../assets/wilgert.png" width="600" height="350" alt="HYF Video" /></a>

## 1. Synchronous vs. asynchronous

### Synchronous

In the previous module you've learned about **control flow**. In short: it's the order in which the computer executes statements in a script. In JavaScript this goes from left to right, top to bottom.

Let's look at code execution from another angle. The program that executes your code can do it in two basic ways: synchronous or asynchronous. Whenever code blocks are executed line after line (from top to bottom) we call this **synchronous execution**. However, when code blocks can be executed **without having to wait until a command ends**, we call this **asynchronous execution**. This is illustrated in the following diagram:

![Sync vs. Async](../assets/javascript-sync-vs-async.png)

Now imagine the following scenario:

> Noer wants to have breakfast but he doesn't have any food at home. He decides he want to eat oatmeal. The ingredients (oats and milk) can be bought at the supermarket. How to do this? First Noer takes a shower. Then he puts on some clothes. Then some shoes. Then he opens the door and goes outside. Then he jumps on the bike and goes to the closest supermarket. After looking for some time he finds the ingredients. Then Noer buys the ingredients. Then he jump back on the bike and go home. Then he mixes the ingredients and makes oatmeal. Then Noer eats and feels amazing!

In this example, each action could only happen after the previous has been completed. Noer can't put on his shoes, while taking a shower. Or, he can't eat oatmeal while he buys the ingredients.

As you can see, each action is executed in a synchronous manner. This is to say: in a logical order sequentially and only one action at a time.

**This is also how JavaScript by default operates**. Only one operation can happen at a time. If something else wants to start, it has to wait until the current action has finished.

### Asynchronous

Sometimes we want to do multiple things at the same time, without each action to be dependent on each other. Asynchronous execution avoids this bottleneck. You are essentially saying, “I know this function call is going to take a great deal of time, but my program doesn’t want to wait around while it executes.” Consider the following scenario:

> Wouter is feeling hungry, so he decides to go to a restaurant. He arrives there and gets into the line to order food. After ordering he takes a seat and, while he waits, reads a book. Occassionally he looks around and sees different things happening: new people enter the restaurant, some people get their food served and others are just talking. After a short while Wouter's food arrives and it's time to dig in!

In this example Wouter reads a book, but that doesn't affect his meal from being prepared. While his meal is prepared there are other people walking around, eating or just talking with each other. In short: multiple things are happening simultaneously and every event is not dependent upon another.

This does not happen by default in JavaScript, and needs to be invoked. A way to do that is by using `callbacks`, which you'll be learning about in the next section.

## 2. Introducing asynchronicity using callbacks

Before we dive into what a `callback` is we have to understand a little about `higher order functions`.

### Higher order functions

Let's start with a simple, practical definition: a higher order function is any function that can take another function as an argument or returns a function.

```js
// Example 1
function higherOrderFunction(anotherFunction) {
  anotherFunction();
  return;
}

// Example 2
function anotherHigherOrderFunction() {
  return function () {
    return;
  };
}
```

Why do we need them? A higher order function integrates multiple functions, which each have a singular operational purpose. This will allow us to reuse code much more than if we had to write everything out.

> Higher order functions are a core concept within a programming paradigm called "functional programming". It's not relevant at all for you to know or care about this, but it's important to be exposed to it.

### Functions as arguments to other functions

Imagine the following situation:

> It's 15.00 and you're studying at home for an exam on the next day. Suddenly, your phone rings. You pick up and find it's your best friend! They ask if you'd like to hang out later. What do you do? On the one hand, you'd love to hang out have fun. On the other hand, you really should study some more. You don't know so you tell your friend that you're going to _call back_ later with your answer. You end the conversation and go back to studying. Maybe you take a break or have a snack as well. On the other line your friend hangs up the phone and continues along with their day: they go out grocery shopping, cleaning the house and cooking dinner. After finishing your studies you call your friend and makes plans to go out together.

This example illustrates the concept of **asynchronicity**: there are multiple processes happening simultaneously, without any single thing being dependent upon another. Your friend is not waiting by the phone until you have the answer. Or in technical terms: until the callback (which is you) has the return value (the answer to your friend's request to hang out).

This is the utility of `callbacks`: they allow us to introduce asynchronicity into the control flow of an application.

Study the following resources to learn more about the importance of callbacks:

- [Asynchronous JavaScript](https://www.youtube.com/watch?v=YxWMxJONp7E)
- [Understanding JavaScript Callbacks](https://www.youtube.com/watch?v=Nau-iEEgEoM)
- [Callback Functions](https://www.youtube.com/watch?v=QRq2zMHlBz4)

## 3. Array Functions

There are different ways of dealing with arrays. The most common way is by using a loop and then writing custom logic inside it in order to manipulate the values. This solution works, but it comes at several disadvantages.

1. The first disadvantage is that using loops requires us to write custom logic for each use case. This can lead to repeated code, which we always want to [avoid](https://www.youtube.com/watch?v=IGH4-ZhfVDk)
2. The second disadvantage is that a loop isn't descriptive about what it intends to do. If another developer reads that code it wouldn't be obvious what it would do, without spending time on it to decipher it

There are certain functions, `array functions`, that aim to solve these two problems simultaneously. Array functions are higher order functions, because they take a function as an argument.

Let's take an example: the `map()` function. It takes a function as an argument, and executes that unto each index position of the array, returning at the end a new array with all the "mapped" values.

Take a look at the following code snippet to see it in action:

```js
const numbers = [2, 4, 6, 8, 10];

function addTwo(number) {
  return number + 2;
}

const numbersPlusTwo = numbers.map(addTwo);

console.log(numbersPlusTwo);
```

Copy and paste this snippet in the browser console to see how it works. As you can see the function `addTwo` added 2 to each value in the `numbers` array, because that's what the `map()` function does: it "maps" a function unto each array index.

We could've done the same thing with a regular loop, but that would've been (1) much less readable, and (2) much more code:

```js
const numbers = [2, 4, 6, 8, 10];
const numbersPlusTwo = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const addedTwo = number + 2;

  numbersPlusTwo.push(addedTwo);
}

console.log(numbersPlusTwo);
```

Can you see why the array function is the better way to go?

Go through the following resources to learn more about the different array functions and their use:

- [JavaScript Higher Order Functions & Arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- [8 Must Know JavaScript Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c)

## 4. Event Loop

If a webpage contains JavaScript, then the browser knows it has to execute the instructions contained in the script files. But how does the browser know what to do first? This is where the `Event Loop` comes in.

Note: while this mechanism is important to be aware of, keep in mind that you won't be using it actively in development.

In simple terms, the `Event Loop` is a mechanism that operates in the browser. It keeps track of the order of execution of JavaScript commands. consists of 4 parts:

1. Heap. This is where the browser assigns space in memory to each process
2. Call Stack. This is the amount of JavaScript commands (read: function calls and events) that need to be executed
3. Web APIs. These are objects (like the document) and functions (like XMLHttpRequest) that can be used within the JavaScript commands found in the Call Stack
4. Callback Queue. This is the "waiting line" for asynchronous function calls

To see it in action check out the following resources:

- [What the heck is an event loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [JavaScript Event Loop](https://www.youtube.com/watch?v=XzXIMZMN9k4)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
