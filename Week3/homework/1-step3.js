'use strict';

function foo(func) {
  // What to do here? 
  //As the argument is a function so I will call the argument itself.
  return func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
