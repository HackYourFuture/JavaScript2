'use strict';

const numbers = [1, 2, 3, 4];


const newNumber = numbers.filter( number => number % 2 !== 0);
console.log(newNumber);
 
const mapping = newNumber.map(number =>number * 2);
console.log(mapping);


console.log('The doubled numbers are', mapping);



