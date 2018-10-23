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
//my answer is copied from : https://snook.ca/archives/javascript/javascript_pass
/*When passing in a primitive type variable like a string or a number,
the value is passed in by value. This means that any changes to that variable
while in the function are completely separate from anything that happens outside the function.*/

// i understand that the variable value inside the function is completely separated from it's value in the global scope.
// in the second case we are changing the value as a key of an object which makes it accessible from inside and outside the function. 