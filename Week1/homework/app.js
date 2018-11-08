'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'i_am_number_four',
    'the_power_of_six',
    'the_rise_of_nine',
    'the_fall_of_five',
    'the_revenge_of_seven',
    'the_fate_of_ten',
    'united_as_one',
    'twee_verhalen_van_sherlock_holmes',
    'the_psychoanalyst',
    'in_the_heat_of_summer' 
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
    
