'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);
console.log(tasks);

// Add your code here

const durationArr = tasks.map(collectTime => collectTime.duration / 60);
console.log(durationArr);

const durationArrCheck = durationArr.filter(check => check >= 2);
console.log(durationArrCheck);


const durationCost = durationArrCheck.reduce((acc, num) => { return acc + (num * 10); }, 0);
console.log(durationCost);

console.log("€ " + durationCost.toFixed(2));

