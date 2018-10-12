'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

function returnArray (arr){
 return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
 })
}

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = returnArray(values);

console.log(uniqueValues);

//another solution

[... new Set(values)];
console.log([... new Set(values)]);


