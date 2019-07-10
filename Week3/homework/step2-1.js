'use strict';

function foo(func) {
  // What to do here?
  func();
  console.log(`Actually I am a function, but I am also an argument in another function.`);
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
