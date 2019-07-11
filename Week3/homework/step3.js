'use strict';

function createBase(base) {
  return function(add) {
    return base + add;
  };
}

const addSix = createBase(6);
// const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(createBase(6)(10)); // the same (16)
console.log(addSix(21)); // returns 27
console.log(createBase(6)(21)); // the same(27)
// Do not change or remove anything below this line
module.exports = createBase;
