'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter(num => num % 2 !== 0).map(num => num * 2);

console.log(newNumbers);
