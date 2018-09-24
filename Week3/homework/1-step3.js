'use strict';
// 3.1 Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
  // What to do here? 
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);