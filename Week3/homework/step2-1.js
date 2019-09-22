'use strict';

function foo(func) {
  // What to do here?
  // since we aim to pass bar as argument to foo then foo should call its parameter.
  return func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar); // foo function call its parameter which is in this case (bar)

// Do not change or remove anything below this line
module.exports = foo;
