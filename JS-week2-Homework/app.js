'use strict';

const doublingOddNumbers = arrays => {
  const newArray = arrays.filter(array => array % 2 !== 0).map(array => array * 2);
  return newArray;
};

console.log(doublingOddNumbers([1, 2, 3, 4]));

//THIS IS THE SECOND QUESTION

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

const mondayTaskDuration = monday.map(task => task.duration / 60).filter(hour => hour > 2);
const tuesdayTaskDuration = tuesday.map(task => task.duration / 60).filter(hour => hour > 2);
const tasksDuration = mondayTaskDuration.concat(tuesdayTaskDuration);
const totalEarnedSum = tasksDuration.reduce((acc, hours) => {
  return acc + hours * 20;
}, 0);
console.log(totalEarnedSum);
const sumFormattedEuroAmount = `€${totalEarnedSum.toFixed(2)}`;
console.log(sumFormattedEuroAmount);
