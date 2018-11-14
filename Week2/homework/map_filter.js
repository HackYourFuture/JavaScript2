'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

//using filter and map
const newNumbers = numbers
    .filter(function(number) {
    return number % 2 !==0;
})
    .map(function(odd) {
        return odd * 2; 
    })
    
console.log(newNumbers); //[ 2, 6 ]

//filter, map and =>
const newNumbers = numbers
      .filter(number => number % 2 !== 0)
      .map(odd => odd * 2);

console.log(newNumbers); // [ 2, 6 ]
