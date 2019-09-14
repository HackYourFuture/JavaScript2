'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// f1(x) = 10 but console.log(x) is 9 here x is not changing val is changing
// f2(y) = {x:10} and console.log(y) is {x:10} the change is effecting objects.
