"use strict";

// Add your code here
function createBase(val) {
  return function(base) {
    return console.log((base += val));
  };
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
