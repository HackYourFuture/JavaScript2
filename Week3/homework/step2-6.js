'use strict';

// Test PASS
const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// Adham: Array.prototype.flat() is not accepted here.

function flattenArray2d(arr) {
  return arr.reduce((firstLeft, nextRight) => firstLeft.concat(nextRight));
}

function flattenArray3d(arr) {
  const firstLevel = arr.reduce((firstLeft, nextRight) => firstLeft.concat(nextRight));
  const secondLevel = firstLevel.reduce((firstLeft, nextRight) => firstLeft.concat(nextRight));
  return secondLevel;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
