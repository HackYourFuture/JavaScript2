'use strict';

// In this first example, we see that this function passes directly the variable value inside the function.
// Changing the argument inside the function doesn't affect the variable passed outside of the function.
// So as long as we don't console log the variable inside the function (f1) our variables 'true' value will remain as 9.
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

// However, in this example below,
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
