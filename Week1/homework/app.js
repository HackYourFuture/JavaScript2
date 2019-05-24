'use strict';

{
  // create places where lists will be added into
  const navigator = document.getElementsByClassName('navigator')[0];
  const mainSection = document.getElementsByClassName('main')[0];

  // an array containing book ids
  const bookTitles = [
    'harry_potter_philosophers_stone',
    'harry_potter_chamber_secrets',
    'harry_potter_prisoner_azkaban',
    'harry_potter_goblet_fire',
    'harry_potter_order_phoenix',
    'harry_potter_halfblood_prince',
    'harry_potter_deathly_hallows',
    'tales_beedle_bard',
    'fantastic_beasts',
    'quidditch_through_ages',
  ];

  // create a list from array
  function makeListFromArray(array) {
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const li = document.createElement('li');
      li.innerText = item;
      ul.appendChild(li);

      li.addEventListener('click', function() {
        window.location.href = '#list-item-' + (i + 1);
      });
    }
    return ul;
  }

  // put the list created from array into navigator section
  let newList = makeListFromArray(bookTitles);
  navigator.appendChild(newList);

  // an array containing detailed info about books
  const bookDetailed = {
    harry_potter_philosophers_stone: {
      title: "Harry Potter and the Philosopher's Stone",
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_chamber_secrets: {
      title: 'Harry Potter and the Chamber of Secrets',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_prisoner_azkaban: {
      title: 'Harry Potter and the Prisoner of Azkaban',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_goblet_fire: {
      title: 'Harry Potter and the Goblet of Fire',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_order_phoenix: {
      title: 'Harry Potter and the Order of the Phoenix',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_halfblood_prince: {
      title: 'Harry Potter and the Half-Blood Prince',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_deathly_hallows: {
      title: 'Harry Potter and the Deathly Hallows',
      language: 'English',
      author: 'J.K. Rowling',
    },
    tales_beedle_bard: {
      title: 'The Tales of Beedle the Bard',
      language: 'English',
      author: 'J.K. Rowling',
    },
    fantastic_beasts: {
      title: 'Fantastic Beasts and Where to Find Them',
      language: 'English',
      author: 'J.K. Rowling',
    },
    quidditch_through_ages: {
      title: 'Quidditch Through the Ages',
      language: 'English',
      author: 'J.K. Rowling',
    },
  };

  // transform object into list
  function makeListFromObject(object) {
    const ul = document.createElement('ul');
    const ids = Object.keys(object);
    for (let i = 0; i < ids.length; i++) {
      const li = document.createElement('li');
      const header = document.createElement('h1');
      const language = document.createElement('h2');
      const author = document.createElement('h2');

      header.innerText = 'Book ' + (i + 1) + ': ' + object[ids[i]].title;
      language.innerText = 'Language: ' + object[ids[i]].language;
      author.innerText = 'Author: ' + object[ids[i]].author;

      li.id = 'list-item-' + (i + 1);
      li.appendChild(header);
      li.appendChild(language);
      li.appendChild(author);

      ul.appendChild(li);
    }
    return ul;
  }

  // put the list created from object into main section of the webpage
  newList = makeListFromObject(bookDetailed);
  mainSection.appendChild(newList);

  // an object containing book covers
  const bookCovers = {
    harry_potter_philosophers_stone: './images/harry_potter_philosophers_stone.jpg',
    harry_potter_chamber_secrets: './images/harry_potter_chamber_secrets.jpg',
    harry_potter_prisoner_azkaban: './images/harry_potter_prisoner_azkaban.jpg',
    harry_potter_goblet_fire: './images/harry_potter_goblet_fire.jpg',
    harry_potter_order_phoenix: './images/harry_potter_order_phoenix.jpg',
    harry_potter_halfblood_prince: './images/harry_potter_halfblood_prince.jpg',
    harry_potter_deathly_hallows: './images/harry_potter_deathly_hallows.jpg',
    tales_beedle_bard: './images/tales_beedle_bard.jpg',
    fantastic_beasts: './images/fantastic_beasts.jpg',
    quidditch_through_ages: './images/quidditch_through_ages.jpg',
  };

  // add covers to the existing list of books
  function addBookCovers(object) {
    const books = Object.keys(object);
    for (let i = 0; i < books.length; i++) {
      const img = document.createElement('img');
      const imageSrc = object[books[i]];
      const imageAlt = books[i];
      const listItem = document.getElementById('list-item-' + (i + 1));

      listItem.appendChild(img);
      img.src = imageSrc;
      img.alt = imageAlt;
    }
  }

  // called the function to add covers to the list
  addBookCovers(bookCovers);

  // take list items of navigator
  const listItemsOfNavigator = navigator.getElementsByTagName('li');

  // function for changing given list items with corresponding parameters of given object
  function changeBookIdsWithTitles(listItems, object) {
    const keys = Object.keys(object);

    for (const item of listItems) {
      if (keys.indexOf(item.innerText) !== -1) {
        item.innerText = object[keys[keys.indexOf(item.innerText)]].title;
      }
    }
  }

  // called the function to change book ids with titles
  changeBookIdsWithTitles(listItemsOfNavigator, bookDetailed);
}
