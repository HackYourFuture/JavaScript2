'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = {
  // eslint-disable-next-line prettier/prettier
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
//  first x is an const variable that doesnt changed during the function
//  second X is inside an object y and it can change
// eslint-disable-next-line prettier/prettier
//  my explanation isn't finished, I will explain it more later....