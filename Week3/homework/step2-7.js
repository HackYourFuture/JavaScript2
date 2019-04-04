'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);

console.log(x);
/*program copy the value of the primitive type,
  and make an operation without changing the original value
  so when we log x we get the original value 
  but when we log f1(x) we get the new value. 
  so f1(x) !== x */

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

/* the value of the object is stored in a reference on memory 
so when we give new value to the object, 
the new value would be stored on the same reference
(the same reference of the original object)
so the original value of the object will change 
so F2(Y) === Y */
