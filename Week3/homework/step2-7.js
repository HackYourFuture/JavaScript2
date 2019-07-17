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
/* My explain:
  when a primitive type assigned to a variable, it means: variable as a container of that value
 but, in a non-primitive type: the variable point to the location, not actually as a container of that value.
 so, in this two function above, when we call the function f1(x), we just copy x's value to the val, so after running function x not changed.
 but, in f2(y), when the function get y as a parameter val also gets the location(address) of what why gets. Both y and val pointed to same location.
 so, changing one of them means changing the another. 
 This is a main difference between primitive type and none-primitive type in javascript   data types.
 */
