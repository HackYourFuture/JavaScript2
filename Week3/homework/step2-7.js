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

// Pass by value rule: if you use a variable inside a function and change its value
// it doesn't affect variable's value which is outside of the function.

// Pass by reference rule: if you use a variable's address or reference inside a function
// and change them it affects variable's value which is outside of the function.
