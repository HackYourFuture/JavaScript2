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

// in the f1 function we use (const x = 9); The variable equals to a primitive value(undefined, null, boolean, string, and numbers). In Pass by Value,
// Function is called by directly passing the value of the variable as the argument. Changing the argument inside the function
// doesn’t affect the variable passed from outside the function. So changing the value of the variable with a function never
// changes the underlying primitive (String or number).

// in the f2 function we use (const y = { x: 9 }); it equals to an object. In Pass by Reference, Function is called by directly
// passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable
// passed from outside the function. The reference/address of the objects and arrays same but the values at that addresses changed.
