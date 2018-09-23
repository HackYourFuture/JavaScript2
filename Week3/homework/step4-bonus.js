'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function arrFilter(arr){
   let uniq = [];
   for (let i = 0; i < arr.length; i++){
      if (uniq.indexOf(arr[i]) === -1){
         uniq.push(arr[i]);
      }
   }
   return uniq;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = arrFilter(values);

console.log(uniqueValues);

// Add your function here. Try and come up with a good name for this function

// Replace `yourFunction` with the name of the function you just created