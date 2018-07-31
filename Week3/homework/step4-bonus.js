'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

function eliminateDuplicates(arr){
    let S = new Set();
    values.forEach(x => S.add(x));
    return Array.from(S);
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = eliminateDuplicates(values);

console.log(uniqueValues);
