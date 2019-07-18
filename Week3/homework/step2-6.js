'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const newArr = [];
  arr.forEach(element => {
    element.forEach(item => {
      newArr.push(item);
    });
  });
  return newArr;
}

function flattenArray3d(arr) {
  const newArr = [];
  arr.forEach(element => {
    element.forEach(item => {
      item.forEach(elm => {
        newArr.push(elm);
      });
    });
  });
  return newArr;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// shorter solution

function flattenAllDimensions(arr, dimension) {
  return arr.flat(dimension);
}

console.log(flattenAllDimensions(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenAllDimensions(arr3d, 2)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
