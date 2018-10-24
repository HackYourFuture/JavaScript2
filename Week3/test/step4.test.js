const { HOMEWORK_FOLDER } = require('../../test-config');
const createBase = require(`../${HOMEWORK_FOLDER}/step4`);

test('step4.js', () => {
  const addSix = createBase(6);
  const result = addSix(10);
  expect(result).toBe(16);
});
