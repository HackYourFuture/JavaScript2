const { HOMEWORK_FOLDER } = require('../../test-config');
const {
  myNumbers,
  doubleOddNumbers
} = require(`../${HOMEWORK_FOLDER}/map_filter`);

test('map_filter.js', () => {

  const result = doubleOddNumbers(myNumbers);
  expect(result).toEqual([2, 6]);
});
