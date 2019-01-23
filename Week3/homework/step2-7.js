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
// When I call the Function directly I can pass the value as a parameter and if I want to change the value of the argument which is inside the function then it will not affect the variable which is exist outside the scope
// By reference way the inside value of the scope will affect the object or the array which is outside the scop
