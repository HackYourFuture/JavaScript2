'use strict';

function foo(func) {
  func();
  // What to do here? 
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove the next line
module.exports = foo;
