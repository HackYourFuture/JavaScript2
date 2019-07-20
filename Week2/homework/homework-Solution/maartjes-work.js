'use strict';
{
  const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180,
    },
    {
      name: 'Some web development',
      duration: 120,
    },
    {
      name: 'Fix homework for class10',
      duration: 20,
    },
    {
      name: 'Talk to a lot of people',
      duration: 200,
    },
  ];

  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 240,
    },
    {
      name: 'Some more web development',
      duration: 180,
    },
    {
      name: 'Staring out the window',
      duration: 10,
    },
    {
      name: 'Talk to a lot of people',
      duration: 200,
    },
    {
      name: 'Look at application assignments new students',
      duration: 40,
    },
  ];

  const maartjesTasks = monday.concat(tuesday);
  const maartjesHourlyRate = 0;

  // converting minint to houre and filter the obj the houre less than 1

  const earnings = maartjesTasks.filter(tasks => {
    let minitRate = tasks.duration;
    let minitHoure = Math.floor(minitRate / 60);
    let minint = minitRate % 60;

    // Merging   the duration with houre with minint

    let maartjesHourlyRate = minitHoure + minint / 60;
    tasks.duration = maartjesHourlyRate;
    return maartjesHourlyRate > 1;
  });

  console.log('After filter');
  console.log(earnings);

  //Calculet maartjes Hourly Earn

  const computeEarnings = earnings.map(tasks => {
    return (tasks.duration *= 20);
  });
  console.log(computeEarnings);

  //Calculet maartjes Total Earn

  const maartjesTotalEarn = maartjesTasks.reduce((totalEarnung, tasks) => {
    totalEarnung += tasks.duration;
    return new Intl.NumberFormat('BELGIUM', { style: 'currency', currency: 'EUR' }).format(
      (356.678).toFixed(2),
    );
  });

  console.log(maartjesTotalEarn);

  //Do not change or remove anything below this line
  // module.exports = {
  //   maartjesTasks,
  //   maartjesHourlyRate,
  //   computeEarnings,
  // };
}
