'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);
console.log("x is passed by value, and it's not changeable by function f1");

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);
console.log("y is passed by reference, because it's is an object and it's changeable by function f2");

// Add your explanation as a comment here

