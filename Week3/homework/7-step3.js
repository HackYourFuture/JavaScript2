'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x); // Here output is 10

console.log(x); // Here the output 9


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/*
an array or object passes by value, the value is a reference to it, so you can change the contents.

but Primitive type variable like string,number etc, are always pass as pass by value. Array and Object is passed as pass by reference.
*/
