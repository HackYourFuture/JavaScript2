'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function createSet(arr) {
  const arrSet = new Set(arr);
  return arrSet;
}

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = createSet(values);

console.log(uniqueValues);
