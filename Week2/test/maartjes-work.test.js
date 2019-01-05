const { maartjesTasks, maartjesHourlyRate, computeEarnings } = require(`../homework/maartjes-work`);

test('maartjes_work.js', () => {
  const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
  const result = earnings.toFixed(2);
  expect(result).toBe('373.33');
});
