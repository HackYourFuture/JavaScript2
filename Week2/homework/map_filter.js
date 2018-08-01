'use strict';

const numbers = [1, 2, 3, 4];


const newNumbers = numbers.filter(w => w % 2 !== 0).map(x => x * 2);

console.log('The doubled numbers are: ' + newNumbers);