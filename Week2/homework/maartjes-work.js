'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const mondayTaskDuration = monday.map(task => task.duration / 60).filter(hour => hour >= 2);
const tuesdayTaskDuration = tuesday.map(task => task.duration / 60).filter(hour => hour >= 2);
const maartjesTasks = mondayTaskDuration.concat(tuesdayTaskDuration);
const maartjesHourlyRate = 20;
function computeEarnings(tasks, hourlyRate) {
  return tasks.reduce((acc, hours) => acc + hours * hourlyRate, 0);
}
const totalEarnedSum = computeEarnings(maartjesTasks, maartjesHourlyRate);
console.log(totalEarnedSum);
const sumFormattedEuroAmount = `€${totalEarnedSum.toFixed(2)}`;
console.log(sumFormattedEuroAmount);

module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
