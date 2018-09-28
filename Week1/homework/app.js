'use strict';
{
  //2.1
  const bookTitles = [
    'brain_camp ',
    'sophie_washington_secret_santa',
    'el_deafo',
    'american_born_chinese',
    'queen_of_the_world!',
    'land_of_sad_oranges',
    'return-to-haifa',
    'in-the-presence-of-absence',
    'black-great-on-you',
    'do-not-be-sad',
  ];
  //2.3
  function bodyFunction() {
    const main_list = document.getElementById('main_list');
    const h1 = document.createElement('h1');
    h1.innerText = 'My Books:';
    main_list.appendChild(h1);
    const ul = document.createElement('ul');
    main_list.appendChild(ul);
    for (let bookTitlesIndex = 0; bookTitlesIndex < bookTitles.length; bookTitlesIndex++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = bookTitles[bookTitlesIndex];
    }
  }
  window.addEventListener('load', bodyFunction);

  function bookTitlesList(ul) {
    for (let bookTitlesIndex = 0; bookTitlesIndex < bookTitles.length; bookTitlesIndex++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = bookTitles[bookTitlesIndex];
    }
  }

  //2.4
  const bookDetails = {
    'brain_camp': { title: 'Brain Camp', language: 'English', author: 'Susan Kim' },
    'sophie_washington_secret_santa': { title: 'Sophie Washington Secret Santa', language: 'English', author: 'Tonya Duncan Ellis ' },
    'el_deafo': { title: 'El Deafo', language: 'English', author: 'Cece Bell' },
    'american_born_chinese': { title: 'American Born Chinese', language: 'English', author: 'Gene Luen Yang' },
    'queen_of_the_world': { title: 'Queen of the World!', language: 'English', author: 'Jennifer L. Holm' },
    'land_of_sad_oranges': { title: 'Land of sad oranges', language: 'Arabic', author: 'Ghassan Kanafani' },
    'return_to_haifa': { title: 'Return to Haifa', language: 'Arabic', author: 'Ghassan Kanafani' },
    'in_the_presence_of_absence': { title: 'In The Presence Of Absence', language: 'Arabic', author: 'Mahmoud Darwish' },
    'black_great_on_you': { title: 'Black great on you', language: 'Arabic', author: 'Ahlam mustghanmy' },
    'do_not_be_sad': { title: 'Don\'t Be Sad', language: 'Arabic', author: 'Alqarny' },
  };


  //2.5
  function bookDetailsFunction() {
    const main_list = document.getElementById('main_list');
    const h1 = document.createElement('h1');
    h1.innerText = 'My Books:';
    main_list.appendChild(h1);
    const ul = document.createElement('ul');
    main_list.appendChild(ul);
    const bookDetailsKeys = Object.keys(bookDetails);
    for (let bookDetailsIndex = 0; bookDetailsIndex < bookDetailsKeys.length; bookDetailsIndex++) {
      const currentKeys = bookDetailsKeys[bookDetailsIndex];
      const li = document.createElement("li");
      ul.appendChild(li);
      const h3 = document.createElement("h3");
      li.appendChild(h3);
      h3.innerText = bookDetails[currentKeys].title;
      const languageP = document.createElement("p");
      languageP.innerText = 'Language: ' + bookDetails[currentKeys].language;
      li.appendChild(languageP);
      const authorP = document.createElement('p');
      authorP.innerText = 'Author: ' + bookDetails[currentKeys].author;
      li.appendChild(authorP);

    }
  }
  bookDetailsFunction();


  //2.7
  const booksImg =
  {
    brain_camp: './images/brain_camp.jpg',
    sophie_washington_secret_santa: "./images/sophie_washington_secret_santa.jpg",
    el_deafo: './images/el_deafo.jpg',
    american_born_chinese: './images/american_born_chinese.jpg',
    queen_of_the_world: './images/queen_of_the_world.jpg',
    land_of_sad_oranges: './images/land_of_sad_oranges.jpg',
    return_to_haifa: './images/return_to_haifa.jpg',
    in_the_presence_of_absence: './images/in_the_presence_of_absence.jpg',
    black_great_on_you: './images/black_great_on_you.jpg',
    do_not_be_sad: './images/do_not_be_sad.jpg',
  };


  function bookWithImg() {
    const main_list = document.getElementById('main_list');
    const h1 = document.createElement('h1');
    h1.innerText = 'My Books:';
    main_list.appendChild(h1);
    const ul = document.createElement('ul');
    main_list.appendChild(ul);
    const bookDetailsKeys = Object.keys(bookDetails);
    for (let bookDetailsIndex = 0; bookDetailsIndex < bookDetailsKeys.length; bookDetailsIndex++) {
      const currentKeys = bookDetailsKeys[bookDetailsIndex];
      const li = document.createElement("li");
      ul.appendChild(li);
      const h3 = document.createElement("h3");
      li.appendChild(h3);
      h3.innerText = bookDetails[currentKeys].title;
      const languageP = document.createElement("p");
      languageP.innerText = 'Language: ' + bookDetails[currentKeys].language;
      li.appendChild(languageP);
      const authorP = document.createElement('p');
      authorP.innerText = 'Author: ' + bookDetails[currentKeys].author;
      li.appendChild(authorP);
      const booksId = Object.keys(booksImg);
      if (bookDetailsKeys[bookDetailsIndex] === booksId[bookDetailsIndex]) {
        let mySrc = Object.values(booksImg);
        let images = document.createElement('img');
        images.setAttribute("src", mySrc[bookDetailsIndex]);
        ul.appendChild(images);
      }


    }

  }


  bookWithImg();


}



