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

// numbers and strings passed to functions by value 
// so changing the argument inside the function doesn’t affect the variable passed from outside the function
// objects passed by reference and changing the argument inside the function affect the variable passed from outside the function.
