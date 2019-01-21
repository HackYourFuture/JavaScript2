'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  let matrix = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      matrix += arr[i][j];
    }
  }
  console.log(matrix);
}

function printArray3d(arr) {
  let matrix = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[j].length; k++) {
        matrix += arr[i][j][k];
      }
    }
  }
  console.log(matrix);
}
console.log(arr2d[2][1]);
printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
