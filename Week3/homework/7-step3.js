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

//source mdn

// 1 - The value of a constant cannot change through reassignment,
//   and it can't be redeclared.

// 2 - The const declaration creates a read-only reference to a value.
// It does not mean the value it holds is immutable,
//   just that the variable identifier cannot be reassigned.
// For instance, in the case where the content is an object,
//   this means the object's contents (e.g., its properties) can be altered.

