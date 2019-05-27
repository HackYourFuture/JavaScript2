'use strict';

// const { myNumbers, doubleOddNumbers } = require(`../homework/map-filter`);

// describe('map_filter', () => {
//   test('result -> [2, 6]', () => {
//     const result = doubleOddNumbers(myNumbers);
//     expect(result).toEqual([2, 6]);
//   });
// });

const myNumbers = [1, 2, 3, 4];
function doubleOddNumbers(x) {
  return x.filter(number => number % 2 !== 0).map(number => number * 2);
}
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
