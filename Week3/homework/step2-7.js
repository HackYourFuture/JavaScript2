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

/* First x is primitive data but second x is complex data because of that
their memory location is not same. Global value of first x doesn't change
but it changes to 10 in f1 function. Second x will get a new value after 
reassigning in the f2 function.  */
