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
In the first function f1, 
the parameter(val) will receive the value of the variable x as an argument and pass it
to the function operation, but x here is const and it is reassigned in the function,
so the value of x will not change.

In the second function f2,
we are refering to the property x in the object through (val.x), which means that we want
to change the value of x in the object by refering to it (by reference).
*/
