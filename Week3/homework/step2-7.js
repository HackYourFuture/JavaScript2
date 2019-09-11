'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x); // 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y); // {x: 10}

// x is a constant number. Function creates a block scoped x variable. X can chance in block scope.
// y is an object. Function can change x key value. Object keys and values mutable.
