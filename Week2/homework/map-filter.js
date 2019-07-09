'use strict';

function doubleOddNumbers(numbers) {
  // the best practice
  return numbers
    .filter(number => Number.isInteger(number) && number % 2 !== 0)
    .map(number => number * 2);

  // another solution with reduce instead of filter and map chaining
  // return numbers.reduce((acc, current) => {
  //   if (Number.isInteger(current) && current % 2 !== 0) acc.push(current * 2);
  //   return acc;
  // }, []);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
