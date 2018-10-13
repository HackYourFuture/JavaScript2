'use strict';
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let u = 0; u < arr[i].length; u++) {
      product = product * arr[i][u];
    }
  }

  // Only change code above this line
  return product;
}

// Modify values below to test your code
const myArr = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(myArr);
