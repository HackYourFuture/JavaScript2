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
//Javascript always passes by value.
//However, if you pass an object to a function, the "value" is really a reference to that object,
//so the function can modify that object's properties but not cause the variable outside the function to point to some other object.
