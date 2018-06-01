'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

//Explanation for first code-----
/* When you pass a primitive value into a function, as an argument, you pass 
a copy of it and original copy is not affected. Hence we get the result 9.
Nine is a primitive value.
-----------------------------------------------------------------------------*/

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Explanation for second code-----
/* When passing an object into a function, you pass it by reference and 
if u change that object in the function, it is also changed as well..and
recreating same variable again, cz scope is different when it was reassigned.
*/
