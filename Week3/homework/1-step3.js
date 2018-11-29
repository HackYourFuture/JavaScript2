'use strict';

function foo(func) {
  console.log('I will do this first and then I execute my callback');
  func();
}

function bar() {
  console.log('I am the callback');
}

foo(bar);
