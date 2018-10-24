const { HOMEWORK_FOLDER } = require('../../test-config');
const hound = require(`../${HOMEWORK_FOLDER}/4-step3`);

test('4-step3', () => {
  expect(typeof hound).toBe('object');
  expect(typeof hound.name).toBe('string');
  expect(typeof hound.color).toBe('string');
  expect(typeof hound.numLegs).toBe('number');
});
