'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;
  arr.forEach(element => {
    element.forEach(item => {
      product *= item;
    });
  });
  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
