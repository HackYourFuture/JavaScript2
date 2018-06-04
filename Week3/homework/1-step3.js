"use strict";

function foo(func) {
  func();
  console.log("This line will appear second");
}

function bar() {
  console.log("Hello, I am bar!");
}

foo(bar);
