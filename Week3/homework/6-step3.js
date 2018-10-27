'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// This is a recursive function: a function calling itself.
// It can print an array of any dimension.
function printAll(arg) {
  if (Array.isArray(arg)) {
    arg.forEach(elem => printAll(elem));
  } else {
    console.log(arg);
  }
}

console.log('\narr2d');
printAll(arr2d);

console.log('\narr3d');
printAll(arr3d);
