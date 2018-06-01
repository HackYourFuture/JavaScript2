'use strict';

const addSix = function (x) {
  return function createBase() {
    return x + 6;
  };
};

const add10 = addSix(10);
const add21 = addSix(21);

console.log(add10());
console.log(add21()); 
