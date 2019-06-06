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
Primitive values passes by value in javascript
Objects(including arrays) passes by reference in javascript

When you assign one primitive variable to another variable,
Javascript creates new separate place(new address) on memory
and then you can not change value of variable calling by value

on the other hand

When you assign an object to another object,
Javascript doesn't create new separate place, but reference to same pace(same address) on memory
and then you can change value of variable calling by reference
*/
