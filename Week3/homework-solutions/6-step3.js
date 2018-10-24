'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// This is a recursive function: a function calling itself.
// It can print an array of any dimension.
function printArray(arg) {
  if (Array.isArray(arg)) {
    arg.forEach(elem => printArray(elem));
  } else {
    console.log(arg);
  }
}

const printArray2d = printArray;
const printArray3d = printArray;

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove the next lines
module.exports = {
  printArray2d,
  printArray3d
};

