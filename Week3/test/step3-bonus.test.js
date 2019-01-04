const makeUnique = require(`../homework/step3-bonus`);

test('step4-bonus', () => {
  const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
  const expected = ['a', 'b', 'c', 'd', 'e', 'f'];
  const result = makeUnique(values);
  expect(result).toEqual(expected);
});
