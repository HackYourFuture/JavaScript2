'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }

  // Replace this comment and the next line with your code
  console.log(arr, product);

  return product;
}

const result1 = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result1); // 720
const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(result); // 5040

// Do not change or remove anything below this line
module.exports = multiplyAll;
