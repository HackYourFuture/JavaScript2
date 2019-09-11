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

// The first function incriminate variable of val 1 number.
// Then returns the number as a variable.
// In the console it is written 9, because x was a const variable.
// That means x never changes.

// The second function incriminate x property of an object called val.
// Then returns the number as an object.
// In the console it is written 10, because y was a const object.
// That means y doesn't change, but the content of y can change.
