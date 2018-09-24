'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
let items = '';
for (let i = 0; i < arr3d.length; i++) {
    for (let y = 0; y < arr3d[i].length; y++) {
        for (let k = 0; k < arr3d[i][j].length; k++) {
            itemsOfArray += arr3d[i][j][k] + ' ';
        }
    }
}

console.log(items);
//1 2 3 4 5 6 7 8 

