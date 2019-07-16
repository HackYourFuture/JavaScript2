'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
function flattenArray2d(arr) {
  const arr2 = arr.reduce(function(newArr, arrItem) {
    return newArr.concat(arrItem);
  }, []);
  return arr2;
}

function flattenArray3d(arr) {
  return arr.reduce(
    (acc, arrItem) =>
      Array.isArray(arrItem) ? acc.concat(flattenArray3d(arrItem)) : acc.concat(arrItem),
    [],
  );
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
