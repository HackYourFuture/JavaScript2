'use strict';

// Add your code here
function createBase(addNumber) {
    return function (number) {
      return number += addNumber;
    };
  }

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
