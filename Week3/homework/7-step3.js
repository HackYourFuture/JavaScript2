"use strict";

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

// in the first function we're making the value of the parameter (val) increment by one every time we call the function, x is 9 (pass by value)
// in the second function we're "hard coding" the value of the object key "x", x is 10 (pass by reference)
// Primitive Data Types (number, string, boolean, etc..) are passed By Value, and Objects are passed By Reference.
