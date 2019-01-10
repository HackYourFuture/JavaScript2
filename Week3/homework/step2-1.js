'use strict';
// document.body.style.backgroundColor = "sky blue";
function foo(func) {
  // What to do here?
  func();
  // Replace this comment and the next line with your code
  console.log('thank you');
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;