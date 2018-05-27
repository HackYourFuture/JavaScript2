'use strict';

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.filter(x => x % 2 !== 0).map(x => x * 2);

console.log(newNumbers);