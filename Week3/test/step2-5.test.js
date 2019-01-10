const multiplyAll = require('../homework/step2-5');

test('5-step3.js', () => {
  const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  expect(result).toBe(5040);
});
