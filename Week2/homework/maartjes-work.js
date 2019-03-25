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

function computeEarnings() {
  const durationInHours = maartjesTasks.map(elem => ({ ...elem, duration: elem.duration / 60 }));
  const moreThenTwoHours = durationInHours.filter(elem => elem.duration >= 2);
  const hourlyRates = moreThenTwoHours.map(elem => ({
    ...elem,
    duration: elem.duration * maartjesHourlyRate,
  }));
  const sum = hourlyRates.reduce((acc, elem) => acc + elem.duration, 0);
  return sum;
}

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
const result = earnings.toFixed(2);

console.log('Maartje has earned €' + result);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
