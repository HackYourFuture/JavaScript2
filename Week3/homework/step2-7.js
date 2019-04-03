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
to the function operation, but x here is a primitive value and it is copied by value.
By the way, if I make console.log(f1(x)); the result will be 10.

In the second function f2,
we are referring to the property x in the object through (val.x), which means that we want
to change the value of x in the object by referring to it (by reference).

I have watched this video on youtube:
https://www.youtube.com/watch?v=9ooYYRLdg_g
*/
