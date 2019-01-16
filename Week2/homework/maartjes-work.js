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

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

const durationInHours = maartjesTasks.map(inHours => inHours.duration / 60);
console.log(durationInHours);

const moreThanTweHours = durationInHours.filter(tweHours => tweHours >= 2);
console.log(moreThanTweHours);

const computeEarnings = moreThanTweHours
    .map(manyPerHours => manyPerHours * maartjesHourlyRate)
    .reduce((total, manyPerHours) => total + manyPerHours, 0);
console.log(computeEarnings);


const currencyFormatter = new Intl.NumberFormat('NL', { style: 'currency', currency: 'EUR' });

const formattedCosts = currencyFormatter.format(computeEarnings);
console.log("Maartje has earned " + formattedCosts);


// Do not change or remove anything below this line
module.exports = {
    maartjesTasks,
    maartjesHourlyRate,
    computeEarnings
};