'use strict';

function foo(func) {
  return func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
