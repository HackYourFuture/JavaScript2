'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(f1(x));

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
y.x = 12;
f2(y);

console.log(y.x);

console.log(y);
// in the first function it is passed by copy value while in the secsond function it is pssed by referenc.
