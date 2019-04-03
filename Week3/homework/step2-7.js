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

// when we assign a primitive value to a variable, an unique memory allocated for it. On the other hand, when an object assigned as a value to a variable, a new memory is not created. Javascript only copies the reference of the data path of the value to the variable. That's why a change in the complex data structures can be passed to the variables. This feature makes them mutable.
