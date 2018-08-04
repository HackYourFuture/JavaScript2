'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
console.log(values);

function removeDuplicate(arr){
  let uniqueArray = arr.filter(function(elem, index) {
      return index == arr.indexOf(elem);
  });
  return uniqueArray
}
// Replace `yourFunction` with the name of the function you just created

const uniqueValues = removeDuplicate(values);

console.log(uniqueValues);


