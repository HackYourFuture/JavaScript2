const { HOMEWORK_FOLDER } = require('../../test-config');
const {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings
} = require(`../${HOMEWORK_FOLDER}/maartjes_work`);

test('maartjes_work.js', () => {

  const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
  const result = earnings.toFixed(2);
  expect(result).toBe('373.33');
});
