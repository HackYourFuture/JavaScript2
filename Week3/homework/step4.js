'use strict';

// Add your code here
function createBase(addedNumber) {
  return function (number) {
    return number += addedNumber;
  };
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
