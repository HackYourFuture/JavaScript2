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
// f1(x)  --> returen 10 ;
//  f2(y) --> return undefined
// Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.
// Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.
// However, changing a property of an object referenced by a variable does change the underlying object.
