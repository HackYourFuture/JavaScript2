'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'awaken_the_giant_within_me',
    'if_tomorrow_comes',
    'unlimited_power',
    'the_power_of_positive_thinking',
    'the_power_of_character_in_leadership',
    'the_girl_on_the_train',
    'man_and_the_sea',
    'fiker_eske_mekabir',
    'keadmas_basher',
    'yetekolefebet',
  ];
  function bookListCreater(bookListobj) {
    const ul = document.createElement('ul');
    document.getElementById('bookListDiv').appendChild(ul);

    for (let propobj in bookListobj) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = propobj;
      //li.innerHTML = bookListobj[propobj];
      console.log(bookListobj[propobj]);
    }
  }

  // Creating object
  let allBookInformation = {
    harry_potter_chamber_secrets: {
      bookInfo: {
        title: bookTitles[0].toUpperCase(),
        language: 'Eneglish',
        author: 'J. K. Rowling',
      },
    },
    awaken_the_giant_within_me: {
      bookInfo: {
        title: bookTitles[1].toUpperCase(),
        language: 'Eneglish',
        author: 'Tony Robbins',
      },
    },

    if_tomorrow_comes: {
      bookInfo: {
        title: bookTitles[2].toUpperCase(),
        language: 'Eneglish',
        author: 'Sidney Sheldon',
      },
    },

    if_tomorrow_comes: {
      bookInfo: {
        title: bookTitles[3].toUpperCase(),
        language: 'Eneglish',
        author: 'Tony Robbins',
      },
    },

    unlimited_power: {
      bookInfo: {
        title: bookTitles[4].toUpperCase(),
        language: 'Eneglish',
        author: 'Dr. Norman Vincent Peale',
      },
    },

    the_power_of_positive_thinking: {
      bookInfo: {
        title: bookTitles[5].toUpperCase(),
        language: 'Eneglish',
        author: 'Dr. Myles Munroe',
      },
    },

    the_girl_on_the_train: {
      bookInfo: {
        title: bookTitles[6].toUpperCase(),
        language: 'Eneglish',
        author: 'Paula Hawkins',
      },
    },

    man_and_the_sea: {
      bookInfo: {
        title: bookTitles[7].toUpperCase(),
        language: 'Eneglish',
        author: 'Ernest Hemingway',
      },
    },

    fiker_eske_mekabir: {
      bookInfo: {
        title: bookTitles[8].toUpperCase(),
        language: 'Amharic',
        author: 'Dr. Haddis Alemayehu',
      },
    },

    keadmas_basher: {
      bookInfo: {
        title: bookTitles[9].toUpperCase(),
        language: 'Amharic',
        author: 'Be alu Girma',
      },
    },

    yetekolefebet: {
      bookInfo: {
        title: bookTitles[10].toUpperCase(),
        language: 'Amharic',
        author: 'Dr Mihret Debebe ',
      },
    },
  };
  console.log(allBookInformation);
  bookListCreater(allBookInformation);
}
