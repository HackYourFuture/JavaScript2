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

function computeEarnings(tasks, hourlyRate) {
  const durations = [];
  for (const obj of tasks) {
    durations.push(obj.duration);
  }

  const hourlyDurations = durations.map(minutes => minutes / 60);

  const consideringDurations = hourlyDurations.filter(hours => hours >= 2);

  const earnings = consideringDurations.reduce((amount, hours) => amount + hours * hourlyRate, 0);

  return earnings;
}

const maartjesEarnings = computeEarnings(maartjesTasks, maartjesHourlyRate).toFixed(2);

console.log(`Maartje has earned €${maartjesEarnings}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
