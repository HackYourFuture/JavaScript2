'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = values.filter((value, index) => values.indexOf(value) === index);

console.log(uniqueValues);
