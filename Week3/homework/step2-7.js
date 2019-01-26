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
// in the first fucntion f1 it pass by reference but inside when we replace it, it create a new variable in the new scope of function
// in the second function f2 we did pass by reference and we reassign the property x for y
//
