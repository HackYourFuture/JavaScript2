function doubleOddNumbers(numbers) {
  const newNumbers = numbers.filter(number => number % 2 !== 0);
  const doubleNumbers = newNumbers.map(number => number * 2);
  return doubleNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));
// ----------------------------

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
/* cSpell: disable */
const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  const duration = tasks.map(task => {
    const hours = task.duration / 60;
    return { ...task, duration: hours };
  });

  const filteredHour = duration.filter(elem => elem.duration >= 2);

  return filteredHour.reduce((acc, elem) => {
    acc += elem.duration * hourlyRate;
    return acc;
  }, 0);
}
console.log(computeEarnings(maartjesTasks, maartjesHourlyRate));

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

const roundEuros = earnings.toFixed(2);

console.log(`Maartje has earned €${roundEuros}`);

module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
/* cSpell: enable */
