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
  const totalHoursOfWork = tasks.map(hour => hour.duration / 60);
  console.log(totalHoursOfWork);
  const hoursMoreThanTwo = totalHoursOfWork.filter(hour => hour >= 2);
  const totalDuration = hoursMoreThanTwo.map(x => x * hourlyRate);
  console.log(totalDuration);
  const billing = totalDuration.reduce((sum, elem) => {
    sum = sum + elem;
    return sum;
  }, 0);
  console.log(billing);
  return billing;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
console.log(earnings);
// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${Math.round(earnings * 100) / 100}.`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
