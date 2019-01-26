'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

function printArray3d(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let t = 0; t < arr[i][j].length; t++) console.log(arr[i][j][t]);
    }
  }
}

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
