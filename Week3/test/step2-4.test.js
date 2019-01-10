const hound = require('../homework/step2-4');

test('4-step3', () => {
  expect(typeof hound).toBe('object');
  expect(typeof hound.name).toBe('string');
  expect(typeof hound.color).toBe('string');
  expect(typeof hound.numLegs).toBe('number');
});
