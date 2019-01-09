const createBase = require(`../homework/step3`);

test('step4.js', () => {
  const addSix = createBase(6);
  const result = addSix(10);
  expect(result).toBe(16);
});
