const { HOMEWORK_FOLDER } = require('../../test-config');
const foo = require(`../${HOMEWORK_FOLDER}/1-step3`);

const mockFn = jest.fn(() => undefined);

test('1-step3.js', () => {
  foo(mockFn);
  expect(mockFn.mock.calls.length).toBe(1);
});
