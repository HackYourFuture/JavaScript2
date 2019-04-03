'use strict';

function foo(func) {
  return setTimeout(func(), 1000);
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
