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

// console.log(f1(x)) === 10 but even after calling f1 function
// value of x does not change. That's because only the value is passed
// to the function. Thus x itself is not affected. But when an
// object or array passed as argument to a function, its reference
// is passed. So if function change the reference's value, array or
// object is also affected from this change.
