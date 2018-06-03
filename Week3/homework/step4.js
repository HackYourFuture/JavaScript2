'use strict';

function createBase(base) {

  return function (num) {
    return num + base;
  };

}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

const addFive = createBase(5);
console.log(addFive(5));
console.log(addFive(10));
