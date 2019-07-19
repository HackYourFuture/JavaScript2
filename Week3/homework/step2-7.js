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

// const x = 9
// In this code we put x value somewhere in the memory heap.
// When We call f1(x), this function uses that variable which is in the memory heap.Actual x will not change.
// So we are just passing value of x inside of function.
// functions have their own scope and execution context So x will be 10 inside of function.
// At the end we are logging x. not f1(x). They are both different scope and execution context.

// Second Example

// This example shows us "Pass by reference in Js". Because;
// console.log(Object.prototype.toString.call(y) === '[object Object]'); returns true
// means typeof y is Object

// When we want to update/do sth. inside of function with objects, actual object will change.
// Because parameter of f2(y) which is y and const y are both referencing the same object.
// If we change reference object both of them will be affected from that code.
// console.log(y) returns {x: 10}
