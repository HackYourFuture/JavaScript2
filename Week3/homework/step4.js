'use strict';

function createBase(x) {
  return function (num) {
    return x + num;
  };
}

const addSix = createBase(6);

console.log(addSix(10)); //returns 16
console.log(addSix(21)); //returns 27
