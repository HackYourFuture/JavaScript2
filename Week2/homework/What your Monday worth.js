'use strict';

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];
const myHourlyRate = 25;

function calcMyRate(hourlyRate, ArrOfTasks) {
  const durationInHours = ArrOfTasks.map(element => element.duration / 60);
  const rate = durationInHours.reduce((a, b) => a + b) * hourlyRate;
  console.log(`Your Monday worth is  €${rate}`)
}


calcMyRate(myHourlyRate, mondayTasks);

