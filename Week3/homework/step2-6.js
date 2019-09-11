'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const flattenedArray = [];

function flattenArray2d() {
  // Replace this comment and the next line with your code
  // console.log(arr);
  for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d[i].length; j++) {
      console.log(arr2d[i][j]);
    }
  }
  return flattenedArray;
}

function flattenArray3d() {
  // Replace this comment and the next line with your code
  // console.log(arr);
  for (let x = 0; x < arr3d.length; x++) {
    for (let y = 0; y < arr3d[x].length; y++) {
      for (let z = 0; z < arr3d[x][y].length; z++) {
        console.log(arr3d[x][y][z]);
      }
    }
  }
  return flattenedArray;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
