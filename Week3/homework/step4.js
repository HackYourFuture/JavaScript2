'use strict';

function createBase(num) {
  return function (item) {
    return num + item;
  }
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
