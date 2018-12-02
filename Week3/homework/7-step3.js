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
/* 
In Javascript all types of data except objects define immutable values "primitive values".
In the case of objects, JavaScript always uses the Object by reference when it passes as an argument, so if we pass objects to a function and call the Function, the function updates the value of the object.
In case we want to console.log the output of the first function, we must console.log(f1(x)) instead.
*/
