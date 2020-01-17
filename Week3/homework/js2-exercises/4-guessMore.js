"use strict";

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
console.log(x);// here we are calling the (global) variable x = 9
f1(x);// here we are calling the function (scope)  x = x+1 = 10

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

console.log(f2(y)); // the result would be {x: 10}, 
console.log(y);// the result would be {x: 9}, 

// But I do't know why if we write a console after calling the FUNCTION, it prints the same result of the FUNCTION, is it because it takes the value of the parameter inside the FUNCTION?
