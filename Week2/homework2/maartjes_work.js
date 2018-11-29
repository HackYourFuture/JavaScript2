'use strict';

const monday = [{
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

const tuesday = [{
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

const durationInHours = tasks.map(tasks => tasks.duration / 60);
console.log(durationInHours);

const lessThanTwoTasks = durationInHours.filter(hour => hour >= 2);
console.log(lessThanTwoTasks);

const ratePerHourInEuro = 10;

/* function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * ratePerHourInEuro;
  }
  console.log(sum.toFixed(2));
}
arraySum(lessThanTwoTasks); */

const summed = lessThanTwoTasks.reduce((total, item) => total + item);
console.log(summed.toFixed(2));


