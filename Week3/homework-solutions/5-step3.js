'use strict';

// note: prefer const and let over let
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    const innerArray = arr[i];
    for (let j = 0; j < innerArray.length; j++) {
      product *= innerArray[j];
    }
  }
  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(result); // 5040

// Do not change or remove the next line
module.exports = multiplyAll;
