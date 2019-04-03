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
// f1(x) is a function returns a number but f2(y) is function returns an object.
// in f1(x) x is constant and it van not change and the result will remain always same x plus 1 which is 10.
// in f1(y) y is also constant but it is an object then content can be change and
// when we run the function each time it will add one to the previous result.
