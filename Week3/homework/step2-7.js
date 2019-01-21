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
// in f1, pass by value was applied which doesn't change the value of the variable for numbers or strings. While in f2, pass by reference was applied which may change the value of the variable for arrays & objects as shown in this example.
