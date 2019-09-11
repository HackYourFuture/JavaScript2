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

// Add your explanation as a comment here

// in f1(x) ==> x not a object, it's only passing the value (9).
// the value of default variable x is not change by function, it's still 9.

// in f2(y) ==> JavaScript is call by value, in case of objects the value being passed is the reference.
// x manipulated by function and it's be 10.
