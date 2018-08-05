'use strict';

2.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

Your solution could be something like this:

const numbers = [1, 2, 3, 4];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log('The doubled numbers are', newNumbers); // ==> [2, 6]

Rewrite the above program using map and filter don't forget to use =>.

// My codes

const numbers = [1, 2, 3, 4];

// Add your code here

const newNumber = numbers
    .filter(n => n % 2 !== 0)
    .map(n => n * 2);

console.log(newNumber); // [2, 6]

