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

/* With the first console log, the value of the x will be printed as 9. Firstly, the value of x 
is set to 9 which is a number and thus primitive data type. Primitive data types cannot be 
reassigned when defined as const which is the case here. Even if x is defined as 'let', the value of 
it would still be 9 since the value of x is passed into the function f1 and x is not assigned to a 
new value. The value of x would have changed if we wrote it like this: 

let x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
x = f1(x);
*/

/* With the second console log, the value of the x which is a key of an object will be printed as 10.
 For the function f2, the address/reference of the object is passed as an argument, thus any changes made to 
 the object within the function will apply to the object itself.  */
