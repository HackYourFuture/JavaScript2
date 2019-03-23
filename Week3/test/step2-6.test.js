/* eslint-disable no-return-assign, dot-notation */
const { flattenArray2d, flattenArray3d } = require('../homework/step2-6');

const arr2d = [[1, 2], [3, 4], [5, 6]];
const expected2d = [1, 2, 3, 4, 5, 6];

const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const expected3d = [1, 2, 3, 4, 5, 6, 7, 8];

describe('step2-6', () => {
  test('flattenArray2d -> [1, 2, 3, 4, 5, 6]', () => {
    const result = flattenArray2d(arr2d);
    expect(result).toEqual(expected2d);
  });

  test('flattenArray3d -> [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    const result = flattenArray3d(arr3d);
    expect(result).toEqual(expected3d);
  });
});
