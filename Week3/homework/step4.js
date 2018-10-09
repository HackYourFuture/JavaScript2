'use strict';

// Add your code here
function createBase(x) {
  return function (y) {
    return x + y;
  }
}
const addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));
