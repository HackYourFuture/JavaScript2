'use strict';

const createBase = base => {
  const addSix = value => {
    base = base + value;
    return base;
  };

  const addTen = value => {
    base = base + value;
    return base;
  };
  return base;
};

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
