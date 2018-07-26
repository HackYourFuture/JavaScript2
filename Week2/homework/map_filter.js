'use strict';

const numbers = [1, 2, 3, 4];

let oddNumbers = numbers.filter(x => x % 2 !==0);
console.log(oddNumbers);
let doubleNumbers = oddNumbers.map(x => x*2);
console.log('The doubled numbers are :', doubleNumbers)
