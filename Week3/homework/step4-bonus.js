'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function constructArrayWithUniqueValues(arr) {
    const newValues = [];
    for (const element of arr) {
        if (newValues.includes(element) === false) {
            newValues.push(element);
        }
    }
    return newValues;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = constructArrayWithUniqueValues(values);

console.log(uniqueValues);
