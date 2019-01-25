const hound = require('../homework/step2-4');

describe('step2-4', () => {
  test('hound to be an object', () => {
    expect(typeof hound).toBe('object');
  });

  test('hound.name to be a string', () => {
    expect(typeof hound.name).toBe('string');
  });

  test('hound.color to be a string', () => {
    expect(typeof hound.color).toBe('string');
  });

  test('hound.numLegs to be a number', () => {
    expect(typeof hound.numLegs).toBe('number');
  });
});
