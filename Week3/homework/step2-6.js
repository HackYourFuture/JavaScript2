'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  // Replace this comment and the next line with your code
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log('2D Array', arr[i][j]);
    }
  }
}

function printArray3d(arr) {
  // Replace this comment and the next line with your code
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        console.log('3D Array', arr[i][j][k]);
      }
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
