'use strict';

// Add your code here
function createBase(num1) {
  const func = function (num2) {
    let result = 0;
    result = num1 + num2;
    console.log(result);
  };
  return func;
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
