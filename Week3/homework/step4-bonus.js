'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

function storeUniqueValues(arr) {
    return Array.from(new Set(arr));
}

const uniqueValues = storeUniqueValues(values);
console.log(uniqueValues);

//another example with numbers
const numbers = [5, 4, 7, 13, 11, 26, 5, 7, 13, 30, 25, 17, 28, 21];

const uniqueNumbers = storeUniqueValues(numbers);
console.log(uniqueNumbers);
