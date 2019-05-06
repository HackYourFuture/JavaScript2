1.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.
/*'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  console.log(numbers);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};*/

'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  return numbers.filter(val => val % 2 !== 0)
    .map(val => val * 2);
  console.log(numbers);
}

const newNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
