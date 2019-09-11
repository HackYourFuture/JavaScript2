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

// In the examples above we see the "pass by value" and "pass by reference" rules. The first one is an example of pass by value rule.
// Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).
//  Changing the argument inside the function does not affect the variable passed from outside the function.

// Contrary to the first example above; when Javascript deals with objects, it passes by reference/address of the variable.
// Therefore, changing the argument inside the function affects the variable passed from outside the function.
