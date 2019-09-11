'use strict';

function createBase(base) {
  // Replace this comment and the next line with your code
  // console.log(base);
  const num1 = base;
  // return function name(x) {
  //   return x + num1;
  // };
  return x => x + num1;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
