'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/* For f1(x) case, we are initializing a x variable and a f1() function on the global scope then calling f1() with passing global x variable. Since x is a primitive datatype, it will be passed by value. After calling f(), a new execution context will be created with a separate val variable. After incrementing, val will be returned. But x variable will not be affected from this increment because x and val are kept in memory by their value in different addresses.

For f2(x) case, since y variable is an object f2(y) call will pass y to f2 function by reference. Means y and val variables are pointing the same object. Incrementing the value of x property will be also seen from y variable.

*/
