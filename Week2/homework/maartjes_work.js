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

const durationsInHours = tasks.map(task => Number(task.duration / 60).toFixed(2));

const twoHrsLessDurations = durationsInHours.filter(twohrs => twohrs >= 2);

const sallaryPerTask = durationsInHours.map(sallaryPerduration => sallaryPerduration * 20);
console.log(sallaryPerTask);

const totalSallery = sallaryPerTask.reduce((accum, value) => accum + value, 0);

console.log(totalSallery);


function formatEuro(money) {
  return '€ ' + Number(money).toFixed(2)
}

const formattedSallery = formatEuro(totalSallery);

console.log(formattedSallery);