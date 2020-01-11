
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

function uurtariefMaandag(calculate) {
  const looptijd = calculate.map(el => {
    return el.duration;
  });

  //getting the time spent in hrs
  const looptijdInUur = looptijd.map(el => {
    return el / 60;
  });

  //the rate in hour
  const vermenigvuldigDuurUurtarief = looptijdInUur.map(el => {
    return el * 25;
  });

  //  THE RESULT FOR ONE DAY
  const somDagtarief = vermenigvuldigDuurUurtarief.reduce((totaal, el) => {
    return el + totaal;
  }, 0);

  return somDagtarief;
}

console.log(`€${uurtariefMaandag(mondayTasks)}`);
