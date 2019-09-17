'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x); // 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y); // {x: 10}

// Pass by Value, Function is called by directly passing the value 9 of the variable x as the argument
// Pass by Reference, Function is called by directly passing the reference (const y = {x:9}) of variable y as the argument
