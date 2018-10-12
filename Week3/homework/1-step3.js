'use strict';

function foo(func) {
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
