'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const newArray1 = [];
  arr.forEach(element => {
    element.forEach(item => {
      newArray1.push(item);
    });
  });
  return newArray1;
}

function flattenArray3d(arr) {
  const newArray2 = [];
  arr.forEach(element => {
    element.forEach(child =>
      child.forEach(item => {
        newArray2.push(item);
      }),
    );
  });
  return newArray2;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
