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
//in the f1 function val x is referenced because x is an variable. Thus the actual x would not be changed by the execution of f1 
//because y is an object, the value of it is passed to the function f2 and the execution of f2 causes a change in the value of y.
