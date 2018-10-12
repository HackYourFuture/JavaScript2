'use strict';

// Add your code here
function createBase(x) {
    return function (z) {
      sum = x + z;
      return sum;
    }
  }
  const addSix = createBase(6);

  console.log(addSix(10));
  console.log(addSix(21));

addSix(10); // returns 16
addSix(21); // returns 27
