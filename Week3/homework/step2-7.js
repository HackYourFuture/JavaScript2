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
// Pass by reference is when variables passed in to functions are given the direct memory address.
// This allows the function to manipulate the object or primitive as it exists outside the scope of the function.
// Pass by value means that when you pass that variable into a function its the equivalent of creating a new variable and making a copy of the passed in variable.
// They’re not necessarily the same exact variable in the same exact memory address but rather copies. Modifying the copy does not affect the original.
