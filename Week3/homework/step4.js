'use strict';

// Add your code here

function createBase(baseNum) {
  return function (x) { return baseNum + x; };
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27

console.log(addSix(21));