'use strict';

function multiplyAll(arr) {
  let product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

const result1 = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(result1); // 5040
const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
