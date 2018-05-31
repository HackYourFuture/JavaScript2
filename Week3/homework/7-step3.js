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
/* 
In Javascript all types of data except objects define immutable values (values which are incapable of being changed).
We refer to values of these types as "primitive values".
In our first case, the type of data that is assigned to x is a number, which is a primitive value.
In case we want to console.log the output of the first function, we must console.log(fi(x)) instead. 
In our second case, the type of data that is assigned to x is an object (not a primitive value).  
*/

