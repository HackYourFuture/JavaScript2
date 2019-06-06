'use strict';

function foo(func) {
  console.log(func());
}

function hello() {
  return 'Hello';
}

foo(hello);

// Do not change or remove anything below this line
module.exports = foo;
