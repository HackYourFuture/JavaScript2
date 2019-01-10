const foo = require('../homework/step2-1');

const mockFn = jest.fn(() => undefined);

test('1-step3.js', () => {
  foo(mockFn);
  expect(mockFn.mock.calls.length).toBe(1);
});
