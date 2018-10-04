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
const hours = tasks.map(hour => hour['duration'] / 60);
const moreThanTwoHours = workHours.filter(moreThanTwoHour => moreThanTwoHour > 2);


let sum;
function add(sum, order) {
  return sum + order;
}
let totalAmount = moreThanTwoHours.map(hour => hour * 12).reduce(add, 0);
console.log(totalAmount);

let roundMoney = totalAmount.toFixed(2);
console.log(roundMoney);
