'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  for (let x = 0; x < arr.length; x++) {
    let innerProduct = 1;
    for (let y = 0; y < arr[x].length; y++) {
      innerProduct = innerProduct * arr[x][y];
    }
    product = product * innerProduct;
  }

  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
