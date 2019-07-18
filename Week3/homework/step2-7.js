'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  console.log(val);
  return val;
}

f1(x);

console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  console.log(val);
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/* In the first example we have a constant named x with the value of 9 (a number). 
function f1 takes a value and adds 1 to it. When x is passed to f1 as an argument, f1 returns 10.
As we can see, it does not change the original value of x because later when we log x we get 9 again.
This is pass by value. Changing the argument inside the function doesn’t affect the variable passed 
from outside the function.

y is an object. When we call the function f2 with the y argument then what happens is
the 'val' parameter in f2 will get the argument of 'y' then val.x will actually be y.x
which will choose the x property of y: {x:9} Then val.x = val.x + 1; adds 1 to the value of x. 
Later when we log y, we can see that it has changed to {x: 10}. This is pass by reference. 

This is an explanation that I like:

Javascript is always pass by value, but when a variable refers to an object (including arrays), 
the "value" is a reference to the object. 

Changing the value of a variable never changes the underlying primitive or object, 
it just points the variable to a new primitive or object.

However, changing a property of an object referenced by a variable does change the underlying object.

https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value

*/
