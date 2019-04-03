'use strict';

function createBase(base) {
  return function(num) {
    return num + base;
  };
}

const addSix = createBase(6);
const addTen = createBase(10);

console.log(addSix(10)); // returns 16
console.log(addTen(17)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
