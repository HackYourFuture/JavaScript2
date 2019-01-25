const createBase = require(`../homework/step3`);

describe('step3', () => {
  test('base = 6', () => {
    const addSix = createBase(6);
    const result = addSix(10);
    expect(result).toBe(16);
  });

  test('base = 10', () => {
    const addTen = createBase(10);
    const result = addTen(10);
    expect(result).toBe(20);
  });
});
