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
// Golden rule is: Primitive data types in Javascript like Number, String, Boolean always pass by value
// whereas Objects are pass by reference.

// First Example

// This example shows us "Pass by value in Js". Because;
// console.log(Object.prototype.toString.call(9) === '[object Number]'); returns true
// typeof 9 is Number which is primitive.

// So we are just passing value of x inside of function. Actual x will not change.

// Second Example
// This example shows us "Pass by reference in Js". Because;
// console.log(Object.prototype.toString.call(y) === '[object Object]'); returns true
// means typeof y is Object

// When we want to update/do sth. inside of function with objects, actual object will change. so;
// console.log(y) returns {x: 10}
