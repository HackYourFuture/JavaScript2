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
/* Primitive type variable like string,number are always pass as pass by value.
Array and Object is passed as pass by reference or pass by value based on these two condition.
if you are changing value of that Object or array with new Object or Array then it is pass by Value.
if you are changing a property value of an object or array then it is pass by Reference */
