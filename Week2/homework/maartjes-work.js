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

// I changed maartjesTasks variable into let in this exercise because I wanted to make changes in the original array.
// I know that is not good practice but since at the end maartjesTasks and maartjesHourlyRate is used, I thought I should go from that.

let maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

// Use Map to turn the duration into hours

// First solution, we get a string with hours and minutes, here we create a new array

// const tasksInHours = maartjesTasks.map(task => ({
//   name: task.name,
//   duration: Math.floor(task.duration / 60) + ` hours ` + (task.duration % 60) + ` minutes`,
// }));
// console.table(tasksInHours);

// Second solution, we get the hours and minutes separately as different properties

// console.log('\nThis is the table with hours and minutes separately as keys:\n');

// const newArray = maartjesTasks.map(task => ({
//   name: task.name,
//   duration: {
//     hour: Math.floor(task.duration / 60),
//     minute: task.duration % 60,
//   },
// }));
// console.table(newArray);

// Third solution is to get the hours in decimals. I will be using this solution for the next steps.
// This time I will change the original array.

console.log('\nThis is Maartjes Tasks with durations transformed into hours: \n');

maartjesTasks = maartjesTasks.map(task => ({
  name: task.name,
  duration: task.duration / 60,
}));

console.table(maartjesTasks);

// Filter out every task that took less than two hours (remove from the collection)

console.log('\nTasks that take more than two hours: \n');
maartjesTasks = maartjesTasks.filter(task => task.duration >= 2);
console.table(maartjesTasks);

// Multiply each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
// Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.

function computeEarnings(tasks, hourlyRate) {
  const totalEarnings = tasks.reduce(
    (accumulator, currentValue) => accumulator + currentValue.duration * hourlyRate,
    0,
  );
  return totalEarnings;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)
const result = earnings.toFixed(2);

// console.log(`Maartje has earned €${'replace this string with the earnings rounded to euro cents'}`);
console.log(`Maartje has earned €${result} `);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
