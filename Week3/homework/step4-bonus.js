'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function removeDoubles(foo) {
    const uniqueLetters = [];
    for (let i = 0; i < foo.length; i++){
        uniqueLetters.push(foo[i]);
    }
    return uniqueLetters;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = removeDoubles(values);

console.log(uniqueValues);
