"use strict";
const arr1d = [25, 32, 35];
const arr2d = [[1, 2], [3, 4], [5, 6]];
const multiDimensionalArr = [[1, 2, [200, 300]], [3, 4], [5, [500, [600]], 6]];

function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printArr(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}

printArr(arr1d);
printArr(arr2d);
printArr(multiDimensionalArr);
