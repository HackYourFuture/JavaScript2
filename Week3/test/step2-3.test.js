const {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile
} = require('../homework/step2-3');

describe('1-step3.js', () => {
  test('for-loop', () => {
    let result = repeatStringNumTimesWithFor('abc', 3);
    expect(result).toBe('abcabcabc');

    result = repeatStringNumTimesWithFor('abc', 1);
    expect(result).toBe('abc');

    result = repeatStringNumTimesWithFor('abc', -2);
    expect(result).toBe('');
  });

  test('while-loop', () => {
    let result = repeatStringNumTimesWithWhile('abc', 3);
    expect(result).toBe('abcabcabc');

    result = repeatStringNumTimesWithFor('abc', 1);
    expect(result).toBe('abc');

    result = repeatStringNumTimesWithFor('abc', -2);
    expect(result).toBe('');
  });

  test('do-while-loop', () => {
    let result = repeatStringNumTimesWithDoWhile('abc', 3);
    expect(result).toBe('abcabcabc');

    result = repeatStringNumTimesWithFor('abc', 1);
    expect(result).toBe('abc');

    result = repeatStringNumTimesWithFor('abc', -2);
    expect(result).toBe('');
  });
});
