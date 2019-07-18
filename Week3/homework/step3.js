'use strict';

function createBase(a) {
  return function(y) {
    console.log(y + a);
  };
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
