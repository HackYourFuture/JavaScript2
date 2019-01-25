const foo = require('../homework/step2-1');

const mockFn = jest.fn(() => undefined);

describe('step2-1', () => {
  test('foo calls func', () => {
    foo(mockFn);
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
