
const numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter(number => number % 2 !== 0);
console.log(newNumbers);
//[ 1, 3 ]

const newNumbers1 =newNumbers.map(newNumbers =>newNumbers * 2);
console.log(newNumbers1);
//[ 2, 6 ]

console.log("The doubled numbers are: ", newNumbers1);
//The doubled numbers are:  [ 2, 6 ]


