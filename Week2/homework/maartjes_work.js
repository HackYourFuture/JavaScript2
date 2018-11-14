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

//task duration in .... minutes
const taskDurationMinutes = tasks.map(function(task) {
  return task.duration;
})

console.log(taskDurationMinutes); //[ 180, 120, 20, 200, 240, 180, 10, 200, 40 ]

// task duration in ... hours
const taskDuartionHours = taskDurationMinutes.map(function(workHours){
  return workHours / 60;
}) 
console.log(taskDuartionHours);//[ 3, 2, 0.33, 3.33, 4, 3, 0.17, 3.33, 0.67]

//filter the durations which are less than 2hr
const earningHours = taskDuartionHours.filter(function(payHours) {
    return payHours >= 2;
})
console.log(earningHours);//[ 3, 2, 3.33, 4, 3, 3.33]

//total earning .. let earning per hour is 10
const earning = earningHours
    .map(hours => hours * 10)
    .reduce ((sum, pay) => sum + pay);

    console.log(earning);//186.66666666666669
    console.log(earning.toFixed(2)); //186.67