'use strict';
// paste your freeCodeCamp solutions in here
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  console.log(product);
}

// Modify values below to test the code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

multiplyAll([[1], [2], [3]]);

multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]);
