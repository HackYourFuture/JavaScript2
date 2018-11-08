'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'I_am_number_four',
    'The_power_of_six',
    'The_rise_of_nine',
    'The_fall_of_five',
    'The_revenge_of_seven',
    'The_fate_of_ten',
    'United_as_one',
    'Twee_verhalen_van_sherlock_holmes',
    'The_psychoanalyst',
    'In_the_heat_of_summer' 
  ];
 
  function generatingBookList () { 

    // Creating the DOM element. 

    let generatingP = document.createElement('p');
    let generatingUl = document.createElement('ul');
    generatingP.appendChild(generatingUl);

    // Creating the function

    for (let i = 0; i<bookTitles.length; i++) {
        let list = document.createElement('li');
        generatingUl.appendChild(list);
        list.innerHTML= bookTitles[i];
    }
    console.log(generatingP);
    }
    generatingBookList();
    }
    
