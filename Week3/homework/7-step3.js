'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);
console.log('function f1 does not change the value of variable x: x is passed by value');


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);
console.log('function f2 changes the value of property y.x: y is passed by reference');


