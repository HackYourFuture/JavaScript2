const multiplyAll = require('../homework/step2-5');

describe('step2-5', () => {
  test('result to be product of array elements', () => {
    const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
    expect(result).toBe(5040);
  });
});
