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

 /*This is because const x is a primitive,it is passed by value, that means when we called our function
and passed x as argument our programme creates a copy of x and used it when the function executed,
but it doesn't change the original value of x, so x value still the original value which is 9.
 while const y is an object,it is passed by reference, that means when we called our function and passed y as
argument.Our programme doesn't make a copy of y value but it takes the original value and used it, 
so y value is the new value after the function executed which is 10. */
