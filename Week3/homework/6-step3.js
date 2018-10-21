'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

// arr2d
for (let i = 0; i < arr2d.length; i++) {
  console.log(i, arr2d[i].length);
  for (let j = 0; j < arr2d[i].length; j++) {
    console.log(arr2d[i][j]);
  }
}

// arr3d
for (let i = 0; i < arr3d.length; i++) {
  console.log(i, arr3d[i].length);
  for (let j = 0; j < arr3d[i].length; j++) {
    console.log(j, arr3d[i][j].length);
    for (let n = 0; n < arr3d[i][j].length; n++) {
      console.log(arr3d[i][j][n]);
    }
  }
}
console.log("staaaaart");
const arr2 = [[1, 2], [3, 4], [5, 6]];
const arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

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
printAll(arr2);

console.log('\narr3d');
printAll(arr3);
console.log("eeeeeend");
