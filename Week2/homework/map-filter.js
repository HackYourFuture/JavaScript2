'use strict';

// exercise 1, double odd numbers 

const myNumbers = [1, 2, 3, 4];

const oddNumbers = myNumbers.filter(n => n % 2 !==0);
    
const newNumbers = oddNumbers.map(x => x * 2);

console.log(newNumbers); // => [2, 6]


