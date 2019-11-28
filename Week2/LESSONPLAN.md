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
Consider a situation where person A wishes to go out for a movie with a friend person B one evening. Person A finds out the time and place and now needs to share it with B. A picks up the phone and tries to call B. Let's say that B is currently busy with some work and can't answer the phone. Person A has now got two options. One option is to stay on the line until B picks up the phone and then share the movie details. Or A could drop a voicemail and ask B to __callback__ once free.

``` javascript
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);
```

### Exercise

#### 1. What will happen? 
#### 2. How to turn the output order around?
``` javascript
function first(){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 500 );
}
function second(){
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
### Example
### Exercise
### Essence
Notes:

- The event loop is part of the browser
- It determines when any given function is executed


## 5. 3 commonly used array functions (filter, reduce, map)
### Explanation
### Example
### Exercise
### Essence
Notes:

- Array functions are predefined functions that come from the Array object
- Each function serves to manipulate arrays in a specific way

