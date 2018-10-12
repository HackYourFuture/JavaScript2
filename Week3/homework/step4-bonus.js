'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
uniqueArray = values.filter(function duplicateRemover (item, pos) {
    return values.indexOf(item) == pos;
})
console.log(uniqueArray);

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = duplicateRemover(values);

console.log(uniqueValues);

//another solution

[... new Set(values)];
console.log([... new Set(values)]);
