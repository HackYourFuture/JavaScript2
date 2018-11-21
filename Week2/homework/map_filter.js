const numbers = [1, 2, 3, 4];
// const newNuxmbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers.push(numbers[i] * 2);
//   }
// }

let newNumbers = numbers
    .filter(number => number % 2 !== 0) 
    .map(number => number * 2);
console.log('The doubled numbers are', newNumbers);