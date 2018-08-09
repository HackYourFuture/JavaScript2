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
// in f1 x is a variable (there is no change of the function) 9.
// in f2 x is an object inside the variable y (there is a change of the function) Object { x: 10 }.  
