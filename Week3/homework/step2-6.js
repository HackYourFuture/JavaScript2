'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const arrXd = [[[[1]], [2]], [[[[[3]]]], 4], [[5], [[6]], [7]], [[[[[[8, 9]]]]]]];

const flattenAll = arr =>
  arr.reduce((resultArr, item) => {
    if (Array.isArray(item)) {
      return [...resultArr, ...flattenAll(item)]; // Recursion
    }
    return [...resultArr, item];
  }, []);

function flattenArray2d(arr) {
  return flattenAll(arr);
}

function flattenArray3d(arr) {
  return flattenAll(arr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArray3d(arrXd)); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
