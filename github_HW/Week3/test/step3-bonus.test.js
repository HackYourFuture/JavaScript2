const makeUnique = require(`../homework/step3-bonus`);

describe('step3-bonus', () => {
  test('array should not contain duplicates', () => {
    const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
    const expected = ['a', 'b', 'c', 'd', 'e', 'f'];
    const result = makeUnique(values);
    expect(result).toEqual(expected);
  });
});
