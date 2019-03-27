// ----------map & filter ------------
const myNumbers = [1, 2, 3, 4];

// double all the elements using map
const newNumbers = myNumbers.map(elem => elem * 2);

console.log(newNumbers); // (4)[2, 4, 6, 8]

//  choose the odd numbers using filter
const numbers = myNumbers.filter(elem => elem % 2 !== 0);
const doubleOddNumbers = numbers.map(elem => elem * 2);

console.log(doubleOddNumbers); // (2)[2, 6]
console.log(doubleOddNumbers(myNumbers));

// or choose the odd numbers using filter this way

// const numbers = myNumbers.filter(elem => elem % 2 !== 0);
// const doubleOddNumbers = numbers.map(elem => elem * 2);

console.log(doubleOddNumbers); // (2)[2, 6]
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

// ----------
/* cSpell: disable */
const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

// Map the tasks to durations in hours
const allTasks = maartjesTasks.map(elem => ({ ...elem, duration: elem.duration / 60 }));

// Filter out everything that took less than two hours
const filteredTasks = allTasks.filter(elem => elem.duration >= 2);

// Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
const sumEarning = filteredTasks.reduce((acc, elem) => {
  const earning = elem.duration * maartjesHourlyRate;
  return acc + earning;
}, 0);
/* cSpell: enable */
console.log(sumEarning);

// Output a formatted Euro amount, rounded to Euro cents
const roundEuros = sumEarning.toFixed(2);
console.log(roundEuros);
