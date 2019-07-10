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

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

const convertDurationsToHour = duties =>
  duties.map(item => ({
    name: item.name,
    duration: item.duration / 60,
  }));

const filterTasks = (tasks = []) => tasks.filter(item => item.duration >= 2);

console.log(convertDurationsToHour(maartjesTasks));
console.log(filterTasks(convertDurationsToHour(maartjesTasks)));

function computeEarnings(tasks, hourlyRate) {
  return tasks.reduce((acc, elem) => acc + hourlyRate * elem.duration, 0);
}

const earnings = computeEarnings(
  filterTasks(convertDurationsToHour(maartjesTasks)),
  maartjesHourlyRate,
);
const result = earnings.toFixed(2);
console.log(`Maartje has earned €${result}`);

// Do not change or remove anything below this line

module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
