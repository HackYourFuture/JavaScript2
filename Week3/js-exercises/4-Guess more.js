'use strict'

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);   // here we don't take the value of x to base it as an argument or object 

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);// here we take the value of x.object and base it into f2