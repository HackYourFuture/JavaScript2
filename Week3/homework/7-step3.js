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


//in the first situation changing the argument inside the function doesn’t affect the variable passed from outside the function which 


// in the second situation we are passing object or array as an argument to the method, then there is a possibility that value of the object can change
