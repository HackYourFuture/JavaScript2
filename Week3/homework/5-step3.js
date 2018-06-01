
'use strict';

function multiplyAll(arr) {
  let product = 1;
  
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[i].length; x++) {

      product = product * arr[i][x];
    }
  }
  
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
