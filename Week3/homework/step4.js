'use strict';

function createBase(baseNumber) {
  return function (addedNumber) {
    let result = 0;
    result = addedNumber + baseNumber;
    console.log(result);
  };
}

const addSix = createBase(6);
const addFive = createBase(5);

addSix(10); // returns 16
addSix(21); // returns 27
addFive(10);
addFive(21);
