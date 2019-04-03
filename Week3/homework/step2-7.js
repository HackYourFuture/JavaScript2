/* eslint-disable no-irregular-whitespace */

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

// In JS there are primitive values and objects(array, function, object).
// Primitives are boolean, null, undefined, string and number.
// Every variable with primitive value has a unique memory location.
// Primitives pass by value. So, if we pass a primitive value in a function
// a new location is created for the value in the function. And at the end we have two
// different values in different locations in memory.
// But, objects, arrays and functions pass by reference which means if we use
// these variables in a function we address the same location.
// So if we assign a new value to the variable, we also change the value of the variable.
// In the first example variable x is a number and numbers are primitive
// which passes by value. Since we have two locations in the memory for x, we get
// 9 for the value of x outside the function, but in the function the value of x is 10.
// In the second example y variable is an object and passes by reference. So
// we have one location in the memory for y value. So we have the same result for y
// in the function and outside the function.
