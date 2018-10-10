'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
{
  for (let i = 0; i < arr2d.length; i++) {

    for (let k = 0; k < arr2d[i].length; k++) {

      console.log('[' + arr2d[i][k] + ']');
    }
  }
}
//----
{
  for (let i = 0; i < arr3d.length; i++) {

    for (let k = 0; k < arr3d[i].length; k++) {

      for (let j = 0; j < arr3d[i][k].length; j++) {

        console.log('[' + arr3d[i][k][j] + ']');
      }
    }
  }
}
