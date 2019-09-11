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

// in the first part, the defined variable is primitive and can't be mutated. reassignment, on line 5, works but its effect is limited to  block scope, thus not effecting value. it is not the same in the second part. here, on line 15, it is mutating, not reassigning. it's being passed by reference and mutating is reflected in 'y'.
