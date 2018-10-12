'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);
/* Here we have created a variable and assigned it to a value x 9. Then we created a function
   and we pass a value to it, so the result should be 10, but here we just returned the 
   value of constant x that has value 10. */
const y = f1(x);
console.log(y);



const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);
/* Here we have an object and we have changed the value of the property of X 9 
   to value X 10, so we can change the property even if the object is constant.
 */

