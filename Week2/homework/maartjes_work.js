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

// Add your code here

// part 1 mapping to hours

const hours = tasks.map(tasks => tasks.duration / 60);

// part 2 putting everything out lower than 2 hours

const moreThan2 = hours.filter(hours => hours >= 2);
 
// part 3 Multiply the each duration by a per-hour rate for billing (* 20)

const earning = moreThan2.map(hours => hours * 20).reduce((total, amount) => total + amount);

// rounding to two decimals

//console.log(earning.toFixed(2)); will console log the total amount in two decimals