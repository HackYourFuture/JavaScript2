# Reading Material JavaScript2 Week 3

## Agenda

These are the topics for week 3:

1. Scope
   - Global vs. local (function and block)
   - Const and let
2. Hoisting
   - What is it
   - When does it happen
   - Why do we need to know it?
3. Closures
4. Thinking like a programmer II

## 1. Scope

On of the central concepts in programming is the idea of `context`: the meaning of any particular thing is only determined in relation to its direct surroundings. Let's take language for example. If I say the following sentence:

> I never said she stole my money.

Reading this it's not obvious how to interpret what the situation is about. Depending on the emphasis of the words it could mean any of the following:

- _I_ never said she stole my money.
- I _never_ said she stole my money.
- I never _said_ she stole my money.
- I never said _she_ stole my money.
- I never said she _stole_ my money.
- I never said she stole _my_ money.
- I never said she stole my _money_.

It depends on `context` for me to know what really happened.

Let's draw the line to programming. Within any program there is a lot happening. But not everything is related to each other; some functions don't depend on other functions or variables

`scope` has to do with "where we can access variables from"

For further research, check out the following:

- [Variable Scope & Context](https://www.youtube.com/watch?v=WPcW83BMT3Y)

### Global vs. local (function and block)

- [Understanding Scope in JavaScript](https://www.youtube.com/watch?v=SBjf9-WpLac)
- [Everything you wanted to know about JavaScript scope](https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope)

### Const and let

Quick refresher: Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.

In JavaScript we define them using the keyword `var`:

```js
var

```

## 2. Hoisting

If you look up the term "hoisting" in any dictionary, you'll find something like this:

> "To raise [something] by means of ropes and pulleys"

A simple example of hoisting is the hoisting of a flag on a pole. You pull on the rope and slowly but surely the flag gets raised up.

### What is it

In JavaScript, hoisting refers to

### When does it happen

### Why do we need to know it?

When you execute your JavaScript code, the interpreter goes through the code twice. The first time is called the `compile-time`, which is when your code is made ready to be executed: there will be safety checks, small optimizations and making sure the syntax is written correctly.

The second time is called `run-time`, which is where it actually executes your code by going through it line by line, doing the assignments, calling the functions, etc.

Hoisting happens during `compile-time`.

## 3. Closures

Simply put, a closure is a function that is defined inside another function.

For further study please check the following resources:

- [The Ultimate Guide to Execution Contexts, Hoisting, Scoping and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- [Understanding Closures](https://www.youtube.com/watch?v=rBBwrBRoOOY)
- [Let's Learn JavaScript Closures](https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/)

## 4. Thinking like a programmer II

Becoming a good developer doesn't mean being good at any particular programming language: as a matter of fact, the language doesn't matter much.

There are only a handful of core concepts

This is the secret behind being a good developer: if you understand the concept, structure and principles of what makes a software program work, it doesn't matter in what way (syntax) it's written.

- [How To Think Like a Programmer](https://www.youtube.com/watch?v=azcrPFhaY9k)
- [Computer Language Fundamentals: Five Core Concepts](https://blog.upperlinecode.com/computer-language-fundamentals-five-core-concepts-1aa43e929f40)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
