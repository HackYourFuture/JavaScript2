'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const arrMultid = [
  [[1, 2, [3, 4]], [5, 6, 7, 8]],
  [[9, 10], [11, 12, [13, 14, 15, [16, 17, 18, 19, [20, 21]]]]],
];

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
  let flattenedArray = [];
  if (Array.isArray(arr)) {
    arr.forEach(elm => {
      if (Array.isArray(elm)) flattenedArray = [...flattenedArray, ...flattenArrayMultilevel(elm)];
      else flattenedArray = [...flattenedArray, elm];
    });
    return flattenedArray;
  }
  return [...flattenedArray, arr];
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArrayMultilevel(arrMultid)); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
  flattenArrayMultilevel,
};
