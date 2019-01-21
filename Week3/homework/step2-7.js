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

// In f1 function if we use console.log(f1(x)) instead of console.log(x) it writes 10 on the log.
// This is why f1 function returns the new value of x.
// But outside the function f1, the primitive value of x is still keeping its first value 9 because of
// f1 function's local scope.
// Objects are not like primitive and you can change the objects' first value with functions
// even if you call it outside the function.
