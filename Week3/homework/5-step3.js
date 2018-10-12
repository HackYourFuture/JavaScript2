'use strict';
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      product = product * arr[i][j];
       console.log(product * arr[i][j]);
    }
  }
  return product;
}

// Modify values below to test your code
multiplyAll([[1], [2], [3]]);
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
multiplyAll([[5, 1], [0, 2, 4, 0.5], [3, 9]]);
