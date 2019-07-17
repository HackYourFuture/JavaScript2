'use strict';

function foo(func) {
  // What to do here? calling the 'callback function'
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
// eslint-disable-next-line prettier/prettier
module.exports = foo;