'use strict';

function createBase(num) {
  return function (item) {
    return num + item;
  }
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

/* Second way to structuring the Function*/
createBase = base => console.log(base + num);
const addSix = createBase(6);



