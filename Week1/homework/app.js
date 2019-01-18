'use strict';

{
  // First part of homework. Getting elements from array.

  const bookIds = [
    'animal_farm',
    'nineteen_eighty_four',
    'burmese_days',
    'last_witness',
    'les_miserables',
    'burning',
    'reckoning',
    'murder_orient_express',
    'man_brown_suit',
    'ice_cold'
  ];

  // function createBookList() {
  //   var ulTag = document.createElement('ul');
  //   document.body.appendChild(ulTag);
  //   for (let i in bookIds) {
  //     var liTag = document.createElement('li');
  //     var liTagText = document.createTextNode(bookIds[i]);
  //     liTag.appendChild(liTagText);
  //     ulTag.appendChild(liTag);
  //   }
  // }

  const bookInfo = {
    animal_farm: {
      title: 'Animal Farm',
      language: 'English',
      author: 'George Orwell',
      alt: 'This is the cover of Animal Farm book'
    },
    nineteen_eighty_four: {
      title: '1984',
      language: 'English',
      author: 'George Orwell',
      alt: 'This is the cover of 1984 book'
    },
    burmese_days: {
      title: 'Burmese Days',
      language: 'English',
      author: 'George Orwell',
      alt: 'This is the cover of Burmese Days book'
    },
    last_witness: {
      title: 'The Last Witness',
      language: 'English',
      author: 'Glenn Meade',
      alt: 'This is the cover of The Last Witness book'
    },
    les_miserables: {
      title: 'Les Miserables',
      language: 'French',
      author: 'Victor Hugo',
      alt: 'This is the cover of Les Miserables book'
    },
    burning: {
      title: 'The Burning',
      language: 'English',
      author: 'Jane Casey',
      alt: 'This is the cover of The Burning book'
    },
    reckoning: {
      title: 'The Reckoning',
      language: 'English',
      author: 'Jane Casey',
      alt: 'This is the cover of The Reckoning book'
    },
    murder_orient_express: {
      title: 'Murder on the Orient Express',
      language: 'English',
      author: 'Agatha Christie',
      alt: 'This is the cover of Murder on the Orient Express book'
    },
    man_brown_suit: {
      title: 'The Man in the Brown Suit',
      language: 'English',
      author: 'Agatha Christie',
      alt: 'This is the cover of The Man in the Brown Suit book'
    },
    ice_cold: {
      title: 'Ice Cold',
      language: 'English',
      author: 'Tess Gerritsen',
      alt: 'This is the cover of Ice Cold book'
    }
  };

  const bookCovers = {
    les_miserables: 'images/les_miserables.jpg',
    burning: 'images/burning.jpg',
    reckoning: 'images/reckoning.jpg',
    murder_orient_express: 'images/murder_orient_express.jpg',
    man_brown_suit: 'images/man_brown_suit.jpg',
    animal_farm: 'images/animal_farm.jpg',
    ice_cold: 'images/ice_cold.jpg',
    nineteen_eighty_four: 'images/nineteen_eighty_four.jpg',
    burmese_days: 'images/burmese_days.jpg',
    last_witness: 'images/last_witness.jpg'
  };

  function addNewTag(tagName, parent, options = {}) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    for (const key of Object.keys(options)) {
      const value = options[key];
      if (key === 'text') {
        elem.textContent = value;
      } else {
        elem.setAttribute(key, value);
      }
    }
    return elem;
  }

  function addLabel(label, value, parent) {
    const pTag = addNewTag('p', parent);
    addNewTag('span', pTag, { text: `${label}: `, class: 'bold' });
    addNewTag('span', pTag, { text: value });
  }

  function createHtml() {
    addNewTag('h1', document.body, { text: 'The Books That I Read' });
    const ulTag2 = addNewTag('ul', document.body);
    for (const bookId of bookIds) {
      const book = bookInfo[bookId];
      const liTag2 = addNewTag('li', ulTag2, { id: bookId });
      addNewTag('h2', liTag2, { text: book.title });
      addLabel('Language', book.language, liTag2);
      addLabel('Author', book.author, liTag2);
    }
  }

  function addImage() {
    for (const bookId of bookIds) {
      const bookCover = bookCovers[bookId];
      const bookAlt = bookInfo[bookId].alt;
      const liTags = document.getElementsByTagName('li')[bookId];
      addNewTag('img', liTags, { src: bookCover, alt: bookAlt });
    }
  }

  function main() {
    createHtml();
    addImage();
  }

  window.addEventListener('load', main);
}
