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
// f1(x) is a function returns a number but f2(y) is function returns an object.
// in f1(x) x is constant and it can not change and the result will remain always same x plus 1 which is 10.
// f2(y) use the value of f1(x).
//in pass value function value in the initial value will remain same and f2(y) will use the initial value and 
//update the value for the each execution with this will value for f2(y) will change but not for f1(x).
