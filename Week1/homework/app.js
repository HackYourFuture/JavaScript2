'use strict';

{
  // First part of homework. Getting elements from array.

  const bookIds = ['animal_farm', 'nineteen_eighty_four', 'burmese_days', 'last_witness',
    'les_miserables', 'burning', 'reckoning', 'murder_orient_express',
    'man_brown_suit', 'ice_cold'];

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

  function createHtml() {
    const mainHeadings = document.createElement('h1');
    document.body.appendChild(mainHeadings);
    const mainHeadingsText = document.createTextNode('The Books That I Read');
    mainHeadings.appendChild(mainHeadingsText);

    const ulTag2 = document.createElement('ul');
    document.body.appendChild(ulTag2);

    for (const keys of bookIds) {
      const book = bookInfo[keys];
      const liTag2 = document.createElement('li');
      const attribute = document.createAttribute('id');
      attribute.value = keys;
      liTag2.setAttributeNode(attribute);
      const headings = document.createElement('h2');
      const headingsText = document.createTextNode(book.title);
      headings.appendChild(headingsText);

      const aboutLanguage = document.createElement('p');
      const aboutLanguageSpan = document.createElement('span');
      const aboutLanguageSpanText = document.createTextNode('Language: ');
      aboutLanguageSpan.appendChild(aboutLanguageSpanText);
      aboutLanguage.appendChild(aboutLanguageSpan);
      const aboutLanguageText = document.createTextNode(book.language);
      aboutLanguage.appendChild(aboutLanguageText);

      const aboutAuthor = document.createElement('p');
      const aboutAuthorSpan = document.createElement('span');
      const aboutAuthorSpanText = document.createTextNode('Author: ');
      aboutAuthorSpan.appendChild(aboutAuthorSpanText);
      aboutAuthor.appendChild(aboutAuthorSpan);
      const aboutAuthorText = document.createTextNode(book.author);
      aboutAuthor.appendChild(aboutAuthorText);

      liTag2.appendChild(headings);
      liTag2.appendChild(aboutLanguage);
      liTag2.appendChild(aboutAuthor);
      ulTag2.appendChild(liTag2);
    }
  }

  function addImage() {

    const keysOfBookCovers = Object.keys(bookCovers);

    for (let keys of keysOfBookCovers) {
      const book = bookCovers[keys];
      const bookAlt = bookInfo[keys].alt;
      let liTag2 = document.getElementsByTagName('li')[keys];

      const imgTag = document.createElement('img');
      imgTag.setAttribute('src', book);
      imgTag.setAttribute('alt', bookAlt);
      liTag2.appendChild(imgTag);

    }
  }

  function main() {
    createHtml();
    addImage();
  }

  window.addEventListener('load', main);
}
