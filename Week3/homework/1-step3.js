'use strict';

function foo(func) {
  const x = 12;

  console.log('My address is :' + x);
  func();
}
function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
