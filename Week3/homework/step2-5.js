'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  // Replace this comment and the next line with your code
  console.log(arr, product);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      product *= arr[i][j];
    }
  }

  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
