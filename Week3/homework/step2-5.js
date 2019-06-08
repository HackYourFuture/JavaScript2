'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  // Replace this comment and the next line with your code
  // console.log(arr, product);
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr[index].length; j++) {
      product = product * arr[index][j];
    }
  }
  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
