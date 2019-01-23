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

/*  While dealing with primitives(strings, numbers etc.) Javascript always passes by value,
that we can see in the first example original variable value (const x = 9) did not change.
On the other hand while dealing with objects (objects, arrays) Javascript passes by reference.
Therefore changing the object changes the original one. */
