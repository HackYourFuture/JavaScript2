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
// In JavaScript, we have two categories of types:
// 1-Value types or primitives:
// -Number
// -String
// -Boolean
// -Symbol
// -Undefined
// -Null
// 2-Reference Type:
// -Array
// -Object
// -Function

// 1- variable x is a primitive value because it is a type of number, stored on the top of the stack somewhere in the memory
// and when we pass it as an argument to val parameter, we actually copy its value and kind of past it as a value for val.
// So we have two different variable val and x, and when we increase val by one, we only change the value of val variable and not x variable.
// val is 10 and x is 9

// 2-We created an object and we labeled y. Y is a pointer stored on the stack and points to the actual object which is a reference type stored on the heap.
// And if we pass variable y as an argument to the parameter val, we don't actually copy its value
// but we create a new pointer on the stack and this pointer points to the same object in the heap
// Therefore if we increase val by one in the f2 function we change the same object value and the value of y.
// If we invoke the f2 function the value of y will be 10.
