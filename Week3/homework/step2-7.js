'use strict';

// No test required
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
/** ******
 * The answer in this link:
https://www.w3schools.com/js/js_function_parameters.asp
Exactly in these 2 titles:
**Arguments are Passed by Value
**Objects are Passed by Reference
 */
