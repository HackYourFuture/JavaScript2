'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeItUnique(arr) {
  return new Set(arr);
}


// Replace `yourFunction` with the name of the function you just created
const uniqueValues = makeItUnique(values);

console.log(uniqueValues);
