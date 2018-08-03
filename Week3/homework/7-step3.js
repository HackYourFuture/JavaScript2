'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);


const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

//in f1 the x is assigned using const which means it is immutable.
//in f2 the objects(including arrays and functions) assigned to a variable using const are still mutable.Using the const declaration only prevents reassignment of the variable identifier.