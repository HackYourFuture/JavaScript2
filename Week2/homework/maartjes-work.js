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
  const duration = tasks.map(task => {
    const hours = task.duration / 60;
    return { ...task, duration: hours };
  });

  const lessThanTwoHour = duration.filter(elem => elem.duration >= 2);

  return lessThanTwoHour.reduce((acc, elem) => {
    acc += elem.duration * hourlyRate;
    return acc;
  }, 0);
}
console.log(computeEarnings(maartjesTasks, maartjesHourlyRate));

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

const formattedEuro = earnings.toFixed(2);
console.log(formattedEuro);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${formattedEuro}`);
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
