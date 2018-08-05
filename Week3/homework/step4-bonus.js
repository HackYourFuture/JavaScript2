'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function eliminatingDuplicatedElement(arr){
   return arr.filter (function(value, index, array){ return array.indexOf(value) == index})
}
 const uniqueValues = eliminatingDuplicatedElement(values)


// Add your function here. Try and come up with a good name for this function

// Replace `yourFunction` with the name of the function you just created


console.log(uniqueValues);

