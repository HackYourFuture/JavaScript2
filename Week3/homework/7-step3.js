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

/* Add your explanation as a comment here.
The first function is dead (has no output) the value of x will be outputed by line number 11.
The 2nd function is an active function, because in line 15 the X got incremented by 1 and the output of y would be 10.
*/
