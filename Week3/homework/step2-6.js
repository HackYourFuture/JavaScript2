'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattenArr.push(arr[i][j]);
    }
  }
  return flattenArr;
}

function flattenArray3d(arr) {
  const flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        flattenArr.push(arr[i][j][k]);
      }
    }
  }
  return flattenArr;
}
// under this line i added my (in my mind) function.
// it doesn't work but it is what i can think for now.
function flattenArrayKd(arr) {
  const flattenArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flattenArrayKd(element);
    } else {
      flattenArr.push(element);
    }
  });
  return flattenArr;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

console.log(flattenArrayKd(arr3d));
// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
