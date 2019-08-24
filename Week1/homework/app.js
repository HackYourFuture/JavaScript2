'use strict';

{
  const bookTitles = [
    '_Anna_Karenina',
    '_Madame_Bovary',
    '_War_and_Peace',
    '_The_Great_Gatsby',
    '_Lolita',
    '_Middlemarch',
    '_The_Adventures_of_Huckleberry_Finn',
    '_The_Stories_of_Anton_Chekhov',
    '_In_Search_of_Lost_Time_by_Marcel_Proust',
    '_Hamlet',
  ];

  const allBooks = {
    _Anna_Karenina: {
      Name: 'Anna Karenina',
      Author: 'Leo Tolstoy',
      Language: 'Russian',
    },

    _Madame_Bovary: {
      Name: 'Madame Bovary',
      Author: 'Gustave Flaubert',
      Language: 'French',
    },

    _War_and_Peace: {
      Name: 'War and Peace',
      Author: 'Leo Tolstoy',
      Language: 'Russian',
    },

    _The_Great_Gatsby: {
      Name: 'The Great Gatsby',
      Author: 'F. Scott Fitzgerald',
      Language: 'English',
      Comment: 'This book has very good impact.',
      Price: '12€',
    },

    _Lolita: {
      Name: 'Lolita',
      Author: 'Vladimir Nabokov',
      Language: 'Russian',
    },

    _Middlemarch: {
      Name: 'Middlemarch',
      Author: 'George Eliot',
      Language: 'English',
      Price: '10€',
    },

    _The_Adventures_of_Huckleberry_Finn: {
      Name: 'The Adventures of Huckleberry Finn',
      Author: 'Mark Twain',
      Language: 'English',
    },

    _The_Stories_of_Anton_Chekhov: {
      Name: 'The Stories of ',
      Author: 'Anton Chekhov',
      Language: 'Russian',
    },

    _In_Search_of_Lost_Time_by_Marcel_Proust: {
      Name: 'In Search of Lost Time',
      Author: 'Marcel Proust',
      Language: 'English',
    },

    _Hamlet: {
      Name: 'Hamlet',
      Author: 'William Shakespeare',
      Language: 'English',
    },
  };
  function writeBookNamesInObject() {
    for (const title of bookTitles) {
      const container = document.createElement('div');
      document.body.appendChild(container);
      const coverImage = document.createElement('img');
      coverImage.src = 'img/' + title + '.jpg';
      container.appendChild(coverImage);
      const ulElement = document.createElement('ul');
      container.appendChild(ulElement);
      for (const property of Object.keys(allBooks[title])) {
        console.log(property);
        const liElement = document.createElement('li');
        liElement.textContent = property + '  :  ' + allBooks[title][property];
        ulElement.appendChild(liElement);
      }
    }
  }
  writeBookNamesInObject();
}
