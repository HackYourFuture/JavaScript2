'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function removeDuplicate(arr) {
    return Array.from(new Set(arr));
}

const uniqueValues = removeDuplicate(values);

console.log(uniqueValues);
