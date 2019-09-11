'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const newArray = [];
  arr.map(arrFirst => arrFirst.map(arrSecond => newArray.push(arrSecond)));
  return newArray;
}

function flattenArray3d(arr) {
  const newArray = [];
  arr.map(newArr1 => newArr1.map(newArr2 => newArr2.map(newArr3 => newArray.push(newArr3))));
  return newArray;
}

flattenArray2d(arr2d);
flattenArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
