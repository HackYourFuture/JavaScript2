'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

console.log(f1(x));

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

console.log(f2(y));

console.log(y);

// Add your explanation as a comment here
/* in the first function we calling the function on (x)...so we do not changing the value of x and 
we can not change it because we use const so if we console.log x ...it will be always 9.

in the second function we do not changing the value of y ...we are changing the value of the key in the object
and that is possible in javascript even if we used const. */
