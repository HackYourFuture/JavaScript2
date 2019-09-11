'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  // Replace this comment and the next line with your code
  const newArr = [];
  arr.map(element1 => element1.map(element2 => newArr.push(element2)));
  return newArr;
}

function flattenArray3d(arr) {
  // Replace this comment and the next line with your code
  const newArray = [];
  arr.map(item1 => item1.map(item2 => item2.map(item3 => newArray.push(item3))));
  return newArray;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
