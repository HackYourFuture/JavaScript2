'use strict';

function foo(func) {
  // What to do here? 

  //write a function that takes another function 
  //as an argument and runs it.

  return func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
