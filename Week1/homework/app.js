'use strict';

{
  /*
  const bookTitles = [
    'Java_Script',
    'Eloquent_JavaScript',
    'The_JavaScript',
    'High_Performance_JavaScript',
    'JavaScript_Patterns',
    'Secrets_of_the_JavaScript_Ninja',
    'Effective_JavaScript',
    'Professional_JavaScript_for_Web_Developers',
    'Learning_Javascript_Design_Patterns',
    'Closure',
  ];

  const newUl = document.createElement('ul');
  bookTitles.forEach(book => {
    const listItem = document.createElement('li');
    const itemText = document.createTextNode(book);
    listItem.appendChild(itemText);
    newUl.appendChild(listItem);
  });

  document.body.appendChild(newUl);
  */

  const bookObject = {
    'Java Script': {
      title: 'The Good Parts',
      language: 'English',
      author: 'Douglas Rockford',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
    },
    'Eloquent JavaScript': {
      title: 'A Modern Introduction to Programming',
      language: 'English',
      author: ' Marian Haversine',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308260856i/8910666.jpg',
    },
    'The JavaScript': {
      title: 'The Definitive Guide',
      language: 'French',
      author: 'David Flanagan',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347652925i/148050.jpg',
    },
    'High Performance JavaScript': {
      title: 'High Performance JavaScript',
      language: 'Italian',
      author: 'Nicholas C. Kakas',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834985i/7008656.jpg',
    },
    'JavaScript Patterns': {
      title: 'JavaScript Patterns',
      language: 'German',
      author: 'Stomas Stefanie',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344668503i/9422683.jpg',
    },
    'Secrets of the JavaScript Ninja': {
      title: 'Secrets of the JavaScript Ninja',
      language: 'French',
      author: 'John Resign',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361224545i/4373732.jpg',
    },
    'Effective JavaScript': {
      title: '68 Specific Ways to Harness the Power of JavaScript',
      language: 'Italian',
      author: 'David Herman',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372042097i/13705402.jpg',
    },
    'Professional JavaScript for Web Developers': {
      title: 'Professional JavaScript for Web Developers',
      language: 'German',
      author: 'Nicholas C. Takas',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1172064302i/135437._SX318_.jpg',
    },
    'Learning Javascript Design Patterns': {
      title: 'Learning Javascript Design Patterns',
      language: 'English',
      author: 'Addr Osmanli',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344734794i/14289134.jpg',
    },
    Closure: {
      title: 'The Definitive Guide',
      language: 'Italian',
      author: 'Michael Colin',
      source:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328761606i/8300295.jpg',
    },
  };

  const createBookCard = () => {
    /* Creating <ul> </ul> in the index.html */
    const newUlElement = document.createElement('ul');
    /* setting attribute to the <ul> </ul> */
    newUlElement.setAttribute('id', 'grid-flex');
    const bookNames = Object.keys(bookObject);
    for (let i = 0; i < bookNames.length; i++) {
      const newLiElement = document.createElement('li');
      newLiElement.setAttribute('class', 'grid-item');
      newUlElement.appendChild(newLiElement);

      const newHeading = document.createElement('h3');
      newLiElement.appendChild(newHeading);
      const book = bookNames[i];
      newHeading.innerHTML += `${book}`;

      const newImage = document.createElement('img');
      //  newImg.setAttribute('src', '/images/' + `${book}` + '.jpg');
      newImage.setAttribute('src', bookObject[`${book}`].source);
      newImage.setAttribute('alt', bookObject[`${book}`].title);
      newLiElement.appendChild(newImage);

      const newParagraph = document.createElement('p');
      newLiElement.appendChild(newParagraph);
      newParagraph.innerHTML += 'Author: ' + bookObject[`${book}`].author;

      const newSpan = document.createElement('span');
      newLiElement.appendChild(newSpan);
      newSpan.innerHTML += 'Language: ' + bookObject[`${book}`].language;
    }
    return newUlElement;
  };
  document.body.append(createBookCard());
}
