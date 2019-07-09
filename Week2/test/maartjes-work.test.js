const {
  maartjesTasks,
  maartjesHourlyRate,
  maartjesEarnings,
} = require(`../homework/maartjes-work`);

describe('maartjes_work', () => {
  test('result -> 373.33', () => {
    const result = maartjesEarnings.toFixed(2);
    expect(result).toEqual('373.33');
  });
});
