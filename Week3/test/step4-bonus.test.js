const { HOMEWORK_FOLDER } = require('../../test-config');
const makeUnique = require(`../${HOMEWORK_FOLDER}/step4-bonus`);

test('step4-bonus', () => {
  const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
  const expected = ['a', 'b', 'c', 'd', 'e', 'f'];
  const result = makeUnique(values);
  expect(result).toEqual(expected);
});
