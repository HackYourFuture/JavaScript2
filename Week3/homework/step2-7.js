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

// Explanation:

/** Pass by value is whereby a function is called by directly passing the value of
 * the variable as the argument. The variable passed from outside the function is not
 * affected as a result of changing the argument inside the function. In this case,
 * the value of 'x' is not changed in the f1 function.
 *
 * While pass by reference is whereby a function is called directly by passing the
 * reference or address of the variable as the argument. Changing the argument inside
 * the function affects the variable passed in from outside the function as in the case
 * of f2 function above.
 */
