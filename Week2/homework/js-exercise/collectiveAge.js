const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];
  const collectiveAge = function(x){
      let ageArray = x.map(x=>x=x.age)
      let ageSum = ageArray.reduce((cv,cu)=>cv+cu);
      return ` The collective age of the HYF team is : ${ageSum}`
  };
  collectiveAge(hackYourFutureMembers);