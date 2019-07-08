'use strict';

function doubleOddNumbers(numbers) {
  // the best practice
  return numbers.filter(n => n % 2 !== 0).map(n => n * 2);

  // another solution with reduce instead og filter and map chaining
  // return numbers.reduce((acc, current) => {
  //   if (current % 2 !== 0) acc.push(current * 2);
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
