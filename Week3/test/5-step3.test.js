const { HOMEWORK_FOLDER } = require('../../test-config');
const multiplyAll = require(`../${HOMEWORK_FOLDER}/5-step3`);

test('5-step3.js', () => {
  const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  expect(result).toBe(5040);
});
