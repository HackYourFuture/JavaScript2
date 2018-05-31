'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

function unique(arr) {

    const arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr2.indexOf(arr[i]) === -1) [
            arr2.push(arr[i])
        ]
    }
    return arr2;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = unique(values);

console.log(uniqueValues);
