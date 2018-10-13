'use strict';

// Add your code here
function createBase(x) {
  return function addition(six) {
    return x + six;
  }

}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
console.log(addSix(10));
console.log(addSix(21));
