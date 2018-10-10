'use strict';

// Add your code here
function createBase(num) {
  return function (num1) {
    let i = num + num1;
    return i;
  }
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
