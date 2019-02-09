// see: https://stackoverflow.com/questions/44890836/how-to-test-console-log-output-using-jest-or-other-javascript-testing-framework?rq=1

function consoleTest(filename, expectedOutput) {
  let outputData = '';
  // eslint-disable-next-line no-return-assign
  const storeLog = (...inputs) => (outputData += inputs.join(' '));

  test(filename, () => {
    console.log = jest.fn(storeLog);
    // eslint-disable-next-line global-require
    require('../homework/' + filename);
    expect(outputData).toBe(expectedOutput);
  });
}

module.exports = consoleTest;
