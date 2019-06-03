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

/* In first function we only copy the value of our"x" variable to the "val". 
they do not point to same memory adress. In second function, since our variable 
is an object, instead of copying its value to "val" variable, it assigns the same 
memory adress to the "val" variable. so whenever we change the value of an object,
other objects which points to same adress also changes. */
