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
// what is happening is that in javascript primitives and numbers are passed by value ,thats mean that
// if teh value change inside de function does not affect the original.
// with arrays and objects is different, the are passed by reference under confitions
// if you are setting the value of an object or array inside the function then it is Pass by Value
// but if you are changing a property value of an object or array inside the function
// then it is Pass by Reference.
