'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;
  for (let counter = 0; counter < arr.length; counter++) {
    for (let counter2 = 0; counter2 < arr[counter].length; counter2++) {
      product *= arr[counter][counter2];
    }
  }
  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
