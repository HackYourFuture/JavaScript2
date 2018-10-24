const { HOMEWORK_FOLDER } = require('../../test-config');
const threeFive = require(`../${HOMEWORK_FOLDER}/2-step3`);

const mockSayThree = jest.fn(() => undefined);
const mockSayFive = jest.fn(() => undefined);

test('2-step3.js', () => {
  threeFive(10, 15, mockSayThree, mockSayFive);

  expect(mockSayThree.mock.calls.length).toBe(2);
  expect(mockSayThree.mock.calls[0][0]).toBe(12);
  expect(mockSayThree.mock.calls[1][0]).toBe(15);

  expect(mockSayFive.mock.calls.length).toBe(2);
  expect(mockSayFive.mock.calls[0][0]).toBe(10);
  expect(mockSayFive.mock.calls[1][0]).toBe(15);
});
