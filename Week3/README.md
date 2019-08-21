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

> asdas

Reading this it's not obvious how to interpret what's said. It depends on `context` for me to know how to look at it correctly.

In JavaScript, scope refers to the current context of your code.

### Global vs. local (function and block)

- [Understanding Scope in JavaScript](https://www.youtube.com/watch?v=SBjf9-WpLac)
- [Everything you wanted to know about JavaScript scope](https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope)

### Const and let

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

For further study please check the following resources:

- [The Ultimate Guide to Execution Contexts, Hoisting, Scoping and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- [Understanding Closures](https://www.youtube.com/watch?v=rBBwrBRoOOY)

## 4. Thinking like a programmer II

Becoming a good developer doesn't mean being good at any particular programming language: as a matter of fact, the language doesn't matter much.

There are only a handful of core concepts

This is the secret behind being a good developer: if you understand the concept, structure and principles of what makes a software program work, it doesn't matter in what way (syntax) it's written.

- [How To Think Like a Programmer](https://www.youtube.com/watch?v=azcrPFhaY9k)
- [Computer Language Fundamentals: Five Core Concepts](https://blog.upperlinecode.com/computer-language-fundamentals-five-core-concepts-1aa43e929f40)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
