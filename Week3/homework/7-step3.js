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
/* Javascript always passes by value, but in an array or object, the value is a reference to it, so you can 'change' the contents.
 Primitive type variable like string,number are always pass as pass by value. 
 Array and Object is passed as pass by reference or pass by value based on these two condition.*/

