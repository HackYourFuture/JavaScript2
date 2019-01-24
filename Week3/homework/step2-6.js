'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function makeList(elements) {
  if (Array.isArray(elements)) {
    elements.forEach(elem => makeList(elem));
  } else {
    console.log(elements);
  }
}

function printArray2d(arr) {
  makeList(arr);
}

function printArray3d(arr) {
  makeList(arr);
}

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
