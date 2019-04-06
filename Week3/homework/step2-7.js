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
/* Variables with primitive values can't be changed with functions but objects can be changed.
When we object into function as a parameter, function is finding its reference/address.
When function causes a change in object, it actually is chancing the referenced object
*/
