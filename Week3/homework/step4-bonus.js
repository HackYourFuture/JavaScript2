'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function noDuplications (arr) {
    arr.sort();
    let noRepeat = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i +1]) {
            noRepeat.push(arr[i]);
        }
    }
    return noRepeat
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = noDuplications(values);

console.log(uniqueValues);
