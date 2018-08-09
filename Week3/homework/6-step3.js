'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
for (let i = 0; i < arr3d.length; i++) {
    for (let j = 0; j < arr3d[i].length; j++) {
        for (let k = 0; k < arr3d[i][j].length; k++) {
            console.log(arr3d[i][j][k]);
        }
    }
}
