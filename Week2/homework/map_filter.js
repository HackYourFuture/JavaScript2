'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter(evenGoAway => 0 != evenGoAway % 2).map(multiplyIt => 2 * multiplyIt);
console.log("The doubled numbers are:", newNumbers);
