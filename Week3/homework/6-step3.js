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
// To print out array of two or more Dimenstions you can create a function that it can  print out by making nested for loops :

function print2DArray(array) {
    for (let i in array) {
        console.log('row:' + i)
        for (let j in array[i]) {
            console.log(" " + array[i][j]);
        }

    }

}

console.log(print2DArray(arr2d))

function print3DArray(array) {
    for (let i in array) {
        for (let j in array[i]) {
            console.log('row:' + i +"."+ j)
            for (let z in array[i][j]) {
                
                console.log(" " + array[i][j][z]);
            }
        }
    }

}
console.log(print3DArray(arr3d))


// you can create also as matrix for 3 dimension as follows
function matrix3D(array3D){
    let new3DArray =[]
for (let i in array3D) {
    new3DArray[i] = array3D[i]; 
    for (let j in array3D[i]) {
        new3DArray[i][j] = array3D[i][j];

        for (let z in array3D[i][j]) {
            new3DArray[i][j][z] = array3D[i][j][z];
            
        }
    }
}
return new3DArray;
}

console.log(matrix3D(arr3d))