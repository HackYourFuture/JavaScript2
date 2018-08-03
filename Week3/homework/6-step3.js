'use strict';

const arr2d = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const arr3d = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

// add your solution here, or add a comment on how you would tackle this problem

//to access the 3 dimensions array we have to used 3 for loops!
for (let i = 0; i < arr3d.length; i++) {
    for (let j = 0; j < arr3d[i].length; j++) {
        for (let k = 0; k < arr3d[j].length; k++) {
            console.log(arr3d[i][j][k]);
        }
    }
}
//Or we could use .flat(3) method which creates a new array with all sub-array elements
//concatenated into it recursively up to the specified depth.But it is still an experimental technology.

//as for k dimensions array, if you have an answer I really would like to hear it :)


//I tried this way for k dimensions array (with some help) and it works! 
const kArr = [
    [12, 2],
    [4, 5, [70, 6], 9],
    [1, [20, 44, [3, [898, 0]]]]
];

function nestedArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            nestedArr(arr[i]);
        } else {
            console.log(arr[i]);
        }
    }

}

nestedArr(kArr);
