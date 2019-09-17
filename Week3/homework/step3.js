'use strict';

function createBase(base) {
  function num(param) {
    return base + param;
  }
  return num;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
