'use strict';

//2.1

const numbers = [1, 2, 3, 4];

const doubledOnlyOddnumbers = numbers.filter(number => number % 2 !== 0)
                                     .map(number => number * 2)

console.log('The doubled  Odd numbers are: ', doubledOnlyOddnumbers);