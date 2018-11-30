'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

for ( var i = 0; i < arr.length; i++) {
    for ( var j = 0; j < arr[i].length; j++) {
        for ( var k = 0; k < arr[j].length; k++) {
            product *= arr[i][j][k];
        }
    }
}