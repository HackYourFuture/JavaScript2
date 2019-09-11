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

/*  const x in line 5 is a number,primitive and immutable. So the changes of x in the f1(x) cannot pass the block scope and cannot
 change the value of const x since it also has a different memory location.
 */
/* On the other hand, y has a object value which is complex data type and mutable. 
The changes in the f2(y) can effect the value of y.
 */
