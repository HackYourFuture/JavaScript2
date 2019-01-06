'use strict';

const numbers = [1, 2, 3, 4];

const doubledOddNumbers = numbers.map(newNumbers => {
    if (newNumbers % 2 !== 0) {
        return newNumbers * 2;
    }
});
console.log(doubledOddNumbers.filter(Number));

// Add your code here
