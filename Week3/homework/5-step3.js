'use strict';
// paste your freeCodeCamp solutions in here
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }

  }

  return product;
}

console.log(multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7]
]));
console.log(multiplyAll([
  [1, 2],
  [3, 4],
  [1, 1, 1]
]));