'use strict';

function foo(func) {
  console.log('and a voice heard from deep:    ');
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
