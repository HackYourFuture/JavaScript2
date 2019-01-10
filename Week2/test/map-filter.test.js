const { myNumbers, doubleOddNumbers } = require(`../homework/map-filter`);

test('map_filter.js', () => {
  const result = doubleOddNumbers(myNumbers);
  expect(result).toEqual([2, 6]);
});
