'use strict';

// Add your code here
function createBase(num) {
  return function (num2) {
    return num + num2;
  };
}
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
console.log(addSix(10));// returns 16
console.log(addSix(21));// returns 27


addSix(10); // returns 16
addSix(21); // returns 27
