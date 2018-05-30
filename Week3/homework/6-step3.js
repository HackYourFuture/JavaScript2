'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let arrText2 = '';
let arrText3 = '';

for (let i = 0; i < arr2d.length; i++) {
  for (let j = 0; j < arr2d[i].length; j++) {
    arrText2 += arr2d[i][j] + '   ';
  }
  console.log(arrText2);
  arrText2 = '';
}

for (let i = 0; i < arr3d.length; i++) {
  for (let j = 0; j < arr3d[i].length; j++) {
    arrText3 += arr3d[i][j] + '   ';
  }
  console.log(arrText3);
  arrText3 = '';
}

console.log(arr2d);
console.log(arr3d);
