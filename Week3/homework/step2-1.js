'use strict';

function foo(func) {
  setTimeout(function() {
    func(); // it delays the applying of another func when it is called
  }, 2000);
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar); // after 2 seconds it is consoled

// Do not change or remove anything below this line
module.exports = foo;
