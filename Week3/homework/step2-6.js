'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  if (Array.isArray(arr)) {
    arr.forEach(elem => printArray2d(elem));
  } else {
    console.log(arr);
  }
}

function printArray3d(arr) {
  if (Array.isArray(arr)) {
    arr.forEach(elem => printArray3d(elem));
  } else {
    console.log(arr);
  }
}

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
