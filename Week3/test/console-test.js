// see: https://stackoverflow.com/questions/44890836/how-to-test-console-log-output-using-jest-or-other-javascript-testing-framework?rq=1

function consoleTest(filename, expectedOutput) {
  let outputData = '';
  const storeLog = (...inputs) => (outputData += inputs.join(' '));

  test(filename, () => {
    console['log'] = jest.fn(storeLog);
    require('../homework/' + filename);
    expect(outputData).toBe(expectedOutput);
  });
}

module.exports = consoleTest;
