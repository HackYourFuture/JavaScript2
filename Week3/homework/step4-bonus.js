'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function removeDuplicates(arr) {

    const modifiedArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (modifiedArray.includes(arr[i]) === false) {
            modifiedArray.push(arr[i]);
        }
    }
    return modifiedArray;
}

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = removeDuplicates(values);

console.log(uniqueValues);
