const {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
} = require('../homework/step2-3');

describe('step2-3 with for-loop', () => {
  test('num = 3', () => {
    const result = repeatStringNumTimesWithFor('abc', 3);
    expect(result).toBe('abcabcabc');
  });

  test('num = 1', () => {
    const result = repeatStringNumTimesWithFor('abc', 1);
    expect(result).toBe('abc');
  });

  test('num = -2', () => {
    const result = repeatStringNumTimesWithFor('abc', -2);
    expect(result).toBe('');
  });

  test('num = 0', () => {
    const result = repeatStringNumTimesWithFor('abc', 0);
    expect(result).toBe('');
  });
});

describe('step2-3 with while-loop', () => {
  test('num = 3', () => {
    const result = repeatStringNumTimesWithWhile('abc', 3);
    expect(result).toBe('abcabcabc');
  });

  test('num = 1', () => {
    const result = repeatStringNumTimesWithWhile('abc', 1);
    expect(result).toBe('abc');
  });

  test('num = 0', () => {
    const result = repeatStringNumTimesWithWhile('abc', 0);
    expect(result).toBe('');
  });

  test('num = -2', () => {
    const result = repeatStringNumTimesWithWhile('abc', -2);
    expect(result).toBe('');
  });
});

describe('step2-3 with do-while-loop', () => {
  test('num = 3', () => {
    const result = repeatStringNumTimesWithDoWhile('abc', 3);
    expect(result).toBe('abcabcabc');
  });

  test('num = 1', () => {
    const result = repeatStringNumTimesWithDoWhile('abc', 1);
    expect(result).toBe('abc');
  });

  test('num = 0', () => {
    const result = repeatStringNumTimesWithDoWhile('abc', 0);
    expect(result).toBe('');
  });

  test('num = -2', () => {
    const result = repeatStringNumTimesWithDoWhile('abc', -2);
    expect(result).toBe('');
  });
});
