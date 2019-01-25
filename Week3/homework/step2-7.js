'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// E.g.1 :the number passed to function so that change the argument inside the function only (function's local scope).
// E.g.2 : changing the argument inside the function affect the property of the object that passed in outside the function so object is deferent.
