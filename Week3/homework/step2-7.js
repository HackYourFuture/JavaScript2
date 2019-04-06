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




*/
