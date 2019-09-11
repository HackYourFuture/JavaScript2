'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const flattenedArr2d = [];
const flattenedArr3d = [];

function flattenArray2d(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattenedArr2d.push(arr[i][j]);
    }
  }
  return flattenedArr2d;
}

function flattenArray3d(arr) {
  for (let k = 0; k < arr.length; k++) {
    for (let l = 0; l < arr[k].length; l++) {
      for (let m = 0; m < arr[k][l].length; m++) {
        flattenedArr3d.push(arr[k][l][m]);
      }
    }
  }

  return flattenedArr3d;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
