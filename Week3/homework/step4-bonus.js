'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeItUnique(arr) {
  return Array.from(new Set(arr));
}


// Replace `yourFunction` with the name of the function you just created
const uniqueValues = makeItUnique(values);

console.log(uniqueValues);
