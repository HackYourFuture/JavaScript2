'use strict';

//1.1

function doubleOddNumbers(numbers) {
  const newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
  return newNumbers;
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

//2
const maartjesTask = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  return tasks
    .map(task => task.duration / 60)
    .filter(hours => hours >= 2)
    .map(hours => hours * hourlyRate)
    .reduce((total, amount) => total + amount, 0);
}

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
console.log(`Maartjes has earned ${earnings.toFixed(2)} Euro`);
// couldn't solve it this way untill Mr.Jim did it
