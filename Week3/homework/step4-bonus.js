'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function removeDuplicates(arr) {
    let uniqueArr= [];
    for (let i = 0; i < arr.length; i++){
        if (uniqueArr.indexOf(arr[i] == -1)) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = removeDuplicates (values);

console.log(uniqueValues);
