'use strict';

// Add your code here

function createBase(num) {
  return function (num2) {
    return num + num2;
  };
}

const addSix = createBase(6);

console.log(addSix(10));// returns 16
console.log(addSix(21));// returns 27
