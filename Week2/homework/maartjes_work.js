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
function calculateEarnings(arrayOfTasks, hourlyWage) {

  const totalRoundedEarnedAmount = arrayOfTasks.map((task) => task.duration / 60)
    .filter((hoursAmount) => hoursAmount >= 2)
    .map((paidHoursAmount) => paidHoursAmount * hourlyWage)
    .reduce((sum, amount) => sum + amount, 0)
    .toFixed(2);

  return totalRoundedEarnedAmount;
}

console.log('Maartje has earned € ' + calculateEarnings(tasks, 25.7));

