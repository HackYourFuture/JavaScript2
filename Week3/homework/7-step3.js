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

//In Pass by Reference, Function is called by directly passing 
//the reference/address of the variable as the argument.
//Changing the argument inside the function affect the variable
//passed from outside the function. In Javascript objects and 
//arrays follows pass by reference.
//so if we are passing object or array as an argument to the method,
//then there is a possibility that value of the object can change.
