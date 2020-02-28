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
  const youWillPaid = function(x){

    const minuetlyRate=25/60;
   
    let paymentArray=x.map(x=>x.duration* minuetlyRate);

     
    let totalPayment=paymentArray.reduce((accumulator, currentValue) => accumulator + currentValue);

    return `totalPayment is €${totalPayment}`;

  };
  youWillPaid(mondayTasks);