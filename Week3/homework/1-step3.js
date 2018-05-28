'use strict';

function foo(func) {

  console.log('Hello, I am foo! I can call another function:');
  func();

}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
