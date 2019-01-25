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
In the first example, we have declared a global variable that has number value then with f1 function we add 1 to val variable.
But when we do console-logging x variable we see the first value because of that value of x is passed by value. 
Because number is primitive value that copies its value to local variable in function. 
So no change effects the original value of variable.

In the second example, we have global variable that has an object with x property and f2 function adds 1 to x property then we return the object.
The difference between x and y is that y is passed by reference so we are able to change the initial value. 
Because val's value refers to y variable, so every change effects the original object.



*/
