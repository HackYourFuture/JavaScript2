'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
console.log("show the doubel number", newNumbers);