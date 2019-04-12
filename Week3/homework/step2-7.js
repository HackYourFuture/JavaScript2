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
/* Primitive variables can not be changed by function, but array or object can be changed. Because when we write array or object
as a argument, it is approached with its reference/address. And when we change object in  function, we are changing 
the referenced/original object. Dont ask why, it is Javascript : )

if we look the codes above, at the first example f1(x) function takes the value of x and using this value and it is 9. This function 
doesnt take x itself and doesnt give it new value. So after function we see the value of x is still 9.
But the second function f2(y) takes a object as an argument and rendering this object itself because of approaching with its reference. 
Reference is different than to take a variables value only. Reference is a bridge which makes the original value changeable. So at the end 
of function f2(y), objects value is changing and being 10.



*/
