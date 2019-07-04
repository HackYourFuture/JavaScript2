const threeFive = require('../homework/step2-2');

const mockSayThree = jest.fn(() => undefined);
const mockSayFive = jest.fn(() => undefined);

describe('step2-2', () => {
  test('12 and 15 divisible by 3', () => {
    threeFive(10, 15, mockSayThree, () => undefined);

    expect(mockSayThree.mock.calls.length).toBe(2);
    expect(mockSayThree.mock.calls[0][0]).toBe(12);
    expect(mockSayThree.mock.calls[1][0]).toBe(15);
  });

  test('10 and 15 divisible by 5', () => {
    threeFive(10, 15, () => undefined, mockSayFive);

    expect(mockSayFive.mock.calls.length).toBe(2);
    expect(mockSayFive.mock.calls[0][0]).toBe(10);
    expect(mockSayFive.mock.calls[1][0]).toBe(15);
  });
});
