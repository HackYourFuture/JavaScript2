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
/*
---pass by value 
the parameter of "val" has nothing to do with argument "x". Const x is beyond the function scope.
---pass by reference
here the code "val.x" is directly addressing the object by targeting object value.
*/
