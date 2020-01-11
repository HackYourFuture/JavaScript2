'use strict';

// function doubleEvenNumbers(numbers) {
// 	const newNumbers = [];
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] % 2 === 0) {
// 			newNumbers.push(numbers[i] * 2);
// 		}
// 	}
// 	return newNumbers;
// }

// const myNumbers = [ 1, 2, 3, 4 ];
// console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

const myNumbers = [ 1, 2, 3, 4, 6, 7, 8, 9, 10 ];
const doubleEvenNumbers = myNumbers.filter((numbers) => numbers % 2 === 0).map((numbers) => numbers * 2);
console.log(doubleEvenNumbers);
