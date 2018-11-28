'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
function printThreeDimensionalArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let i2 = 0; i2 < arr[i].length; i2++) {
            for (let i3 = 0; i3 < arr[i][i2].length; i3++) {
                console.log(arr[i][i2][i3]);
            }
        }
    }
}

printThreeDimensionalArray(arr3d);
