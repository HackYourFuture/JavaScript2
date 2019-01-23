'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArrayNd(arr) {
  let i = 0;
  for (; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printArrayNd(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}

function printArray2d(arr) {
  printArrayNd(arr);
}

function printArray3d(arr) {
  printArrayNd(arr);
}

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
