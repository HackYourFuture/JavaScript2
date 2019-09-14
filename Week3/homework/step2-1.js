'use strict';

function foo(func) {
  return `What is your name? ${func()}`;
}

function bar() {
  return `Hello, I am bar!`;
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
