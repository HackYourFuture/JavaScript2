'use strict';
// paste your freeCodeCamp solutions in here
function multiplyAll(arr) {
  var product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
