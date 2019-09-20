'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return arr.reduce((flattenedArr, currentArr) => [...flattenedArr, ...currentArr], []);
}

function flattenArray3d(arr) {
  return arr.reduce(
    (flattenedArr, current2dArr) => [...flattenedArr, ...flattenArray2d(current2dArr)],
    [],
  );
}

function flattenArrayMultilevel(arr) {
  return arr.reduce(
    (flattenedArr, currentElm) => [
      ...flattenedArr,
      Array.isArray(currentElm) ? flattenArrayMultilevel(currentElm) : currentElm,
    ],
    [],
  );
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArrayMultilevel(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
  flattenArrayMultilevel,
};
