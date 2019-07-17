'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = arr[i][j] * product;
    }
  }
  return product;
}

// eslint-disable-next-line prettier/prettier
const result = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6]
]);
console.log(result); // 720

// Do not change or remove anything below this line
// eslint-disable-next-line prettier/prettier
module.exports = multiplyAll;