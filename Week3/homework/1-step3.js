'use strict';

function foo(func) {
  // What to do here? 
  //func();
  func = func + 1
}
func();

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
