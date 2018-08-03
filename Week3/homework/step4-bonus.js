'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

function findUnique(arr) {
    let newArr = [];
    let indexChecker = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] === arr[j]) {
                    indexChecker++;
                }
            }
        }

        if (indexChecker === 0) {
            newArr.push(arr[i])
        }
        indexChecker = 0;
    }
    return newArr;
}

// or we can do :

function findUnique2(arr) {
    return Array.from(new Set(arr));

}

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = findUnique(values);

console.log(uniqueValues);

const uniqueValues2 = findUnique2(values);

console.log(uniqueValues2);