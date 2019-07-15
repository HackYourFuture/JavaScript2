'use strict';

function bar() {
  console.log('Hello, I am bar!');
}

function foo(func) {
  return func();
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
