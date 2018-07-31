'use strict';

function foo(func) {
  // What to do here? 
  return func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
