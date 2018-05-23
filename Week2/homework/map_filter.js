'use strict';

const numbers = [1, 2, 3, 4];

//making a new array with odds number with filter and double them with map
const newNumbers = numbers.filter(x => x % 2).map(x => x * 2);

console.log(newNumbers);
