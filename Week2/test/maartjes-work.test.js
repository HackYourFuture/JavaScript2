const { maartjesTasks, maartjesHourlyRate, computeEarnings } = require(`../homework/maartjes-work`);

describe.skip('maartjes_work', () => {
  test('earnings rounded to euro cents', () => {
    const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
    const result = earnings.toFixed(2);
    expect(result).toBe('373.33');
  });
});
