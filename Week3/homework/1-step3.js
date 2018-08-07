"use strict";

function foo(func) {
  console.log("Hello, I am foo!");
  return func();
}

function bar() {
  console.log("Hello, I am bar!");
}

foo(bar);
