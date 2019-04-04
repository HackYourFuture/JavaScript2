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

// Add your explanation as a comment
/* 
Changing the value of a variable never changes the underlying primitive or object. 
However, changing a property of an object referenced by a variable does change the underlying object.
*/

/* 
in my terms:
the variable == x == is defined with (const). when the value of such a variable is a num or str, so it doesn't accept any changes.
the variable == y == has object as a value. when the value of a variable is an arr or an obj, 
so it accepts changes accessing it through keys for obj and [i] for arr.
*/
