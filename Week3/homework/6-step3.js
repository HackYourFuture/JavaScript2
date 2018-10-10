'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
for (let i = 0; i < arr2d.length; i++) {
  for (let j = 0; j < arr2d[i].length; j++) {
    console.log(arr2d[i][j]);
  }
}

for (let x = 0; x < arr3d.length; x++) {
  for (let z = 0; z < arr3d[x].length; z++) {
    for (let v = 0; v < arr3d[x][z].length; v++) {
      console.log(arr3d[x][z][v]);
    }
  }
}
