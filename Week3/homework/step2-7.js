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

// In the first function, the function is called by directly
// passing the value of the variable as the argument. Changing
// the argument inside the function does not affect the variable
// passed from outside. This is known as Pass by Value.

// On the other hand we have Pass by Reference in the second function.
// This is where the function is directly called by passing reference or
// address of the variable as the argument. Changing the argument inside the
// function affects the variable passed from outside the function.
