'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);


const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
//  In the case  console.log(x) is just simply asking to console log the value of  x which is 9  because the variable (global) x is assigned to number 9. 
// In the case console.log(y); the variable y(global) is an abject with property x and its value number 9. There fore the result is   { x: 9 }. It is not related with the function calling. 
// If the  console log (f2(y)):  the result will be different.