'use strict';

function createBase(base) {
  return function (num) {
    return base + num;
  };
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove the next line
module.exports = createBase;
