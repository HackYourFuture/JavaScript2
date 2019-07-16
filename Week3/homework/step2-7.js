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

// In the first function return val is 10. However, x value is still same.  Because const x is a primitive type and the equal operator
// in the f1() understands it is primitive so that it creates val primitive type on the new location in the memory.
// Actually we are passing a copy of x, whether you transform the x inside the f1(), it wont affect the x variable on the global scope.
// As a result primitive types are passed into the function by value.

// In the second function return val is {x: 10 }. In the global it has changed too. Because const y is an object type and the equal operator
// in the f2() understands it is object type so that it doesn't create a new value on the memory.
// Actually we are passing actual y  if you transform the y inside the f2(), it will affect the y variable on the global scope.
// As a result object types are passed into the function by reference.

// Those are the things that I understand from the google search :) Is the purpose of passing by value and reference is because
// objects has massive size if we compare them to the primitive types? Is it why JS treats in that way? to preventing memory misusage?
