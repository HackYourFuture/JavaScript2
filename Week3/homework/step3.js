'use strict';

function createBase(base) {
  function base2(base3) {
    return base + base3;
  }
  return base2;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
