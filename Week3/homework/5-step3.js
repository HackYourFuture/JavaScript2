'use strict';

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    var innerArray = arr[i];
    for (var j = 0; j < innerArray.length; j++) {
      product *= innerArray[j];
    }
  }
  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(result);
