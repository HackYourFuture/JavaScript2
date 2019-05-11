'use strict';

// exercise 1, double odd numbers 

const myNumbers = [1, 2, 3, 4];

const oddNumbers = myNumbers.filter(n => n % 2 !==0);
    
const newNumbers = oddNumbers.map(x => x * 2);

console.log(newNumbers); // => [2, 6]


//exercise 2

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
      duration: 1.0
    }
  ];
  
  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0
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
      duration: 1.0
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];
  
     const allTasks = monday.concat(tuesday);
  
    const MaartjesHourlyPayment = 20;
  
    function salary(tasks, hourlyPayment) {
  
      const taskDuration = tasks.map(x =>x.duration);
      const payableHours = taskDuration.filter(y => y > 119);  //exclude less then 2 hours. No special codding added for 1.0 hours format, because there are no 2.0 hours:)
      const total = (accumulator, currentValue) => accumulator + currentValue;
      const totalInHours = payableHours.reduce(total);
      const paymentRaw = totalInHours/60*20;
      var payment = paymentRaw.toFixed(2);
      return payment;
    }
  
    const earned = salary(allTasks, MaartjesHourlyPayment);
    
    console.log(`Maartje has made €${earned}. Good Job.`);
   
  
  
