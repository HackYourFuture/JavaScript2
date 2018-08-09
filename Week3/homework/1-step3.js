'use strict';

function foo(func) {
  setTimeout(function () { bar() }, 5000);
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

