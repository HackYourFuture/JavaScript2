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

The answer is a bit simple to be honest, when you log x, of course it will log a value which is number 9, but in the case of y is a bit different because the value is an object, this you can see by logging the typeof x and y,

this happens because in Javascript, data types like numbers strings and booleans always pass by values, and objects pass by references

*/