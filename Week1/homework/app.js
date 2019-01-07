'use strict';

{
  // First part of homework. Getting elements from array.

  // const bookTitles = ['animal_farm', 'nineteen_eighty_four', 'burmese_days', 'last_witness',
  //   'les_miserables', 'burning', 'reckoning', 'murder_orient_express',
  //   'man_brown_suit', 'ice_cold'];

  // var myBookList = function () {
  //   var ulTag = document.createElement('ul');
  //   document.body.appendChild(ulTag);
  //   for (let i in bookTitles) {
  //     var liTag = document.createElement('li');
  //     var liTagText = document.createTextNode(bookTitles[i]);
  //     liTag.appendChild(liTagText);
  //     ulTag.appendChild(liTag);
  //   }
  // }

  const bookInfo = {
    animal_farm: {
      title: 'Animal Farm',
      language: 'English',
      author: 'George Orwell',
    },
    nineteen_eighty_four: {
      title: '1984',
      language: 'English',
      author: 'George Orwell',
    },
    burmese_days: {
      title: 'Burmese Days',
      language: 'English',
      author: 'George Orwell',
    },
    last_witness: {
      title: 'The Last Witness',
      language: 'English',
      author: 'Glenn Meade',
    },
    les_miserables: {
      title: 'Les Miserables',
      language: 'French',
      author: 'Victor Hugo',
    },
    burning: {
      title: 'The Burning',
      language: 'English',
      author: 'Jane Casey',
    },
    reckoning: {
      title: 'The Reckoning',
      language: 'English',
      author: 'Jane Casey',
    },
    murder_orient_express: {
      title: 'Murder on the Orient Express',
      language: 'English',
      author: 'Agatha Christie',
    },
    man_brown_suit: {
      title: 'The Man in the Brown Suit',
      language: 'English',
      author: 'Agatha Christie',
    },
    ice_cold: {
      title: 'Ice Cold',
      language: 'English',
      author: 'Glenn Meade',
    },
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
    last_witness: 'images/last_witness.jpg',
  };

  function createHtml() {
    let mainHeadings = document.createElement('h1');
    document.body.appendChild(mainHeadings);
    let mainHeadingsText = document.createTextNode('The Books That I Read');
    mainHeadings.appendChild(mainHeadingsText);

    let ulTag2 = document.createElement('ul');
    document.body.appendChild(ulTag2);

    let keysOfBookInfo = Object.keys(bookInfo);
    for (let i of keysOfBookInfo) {
      let liTag2 = document.createElement('li');
      let attribute = document.createAttribute('id');
      attribute.value = i;
      liTag2.setAttributeNode(attribute);
      let headings = document.createElement('h2');
      let headingsText = document.createTextNode(bookInfo[i].title);
      headings.appendChild(headingsText);

      let aboutLanguage = document.createElement('p');
      let aboutLanguageSpan = document.createElement('span');
      let aboutLanguageSpanText = document.createTextNode('Language: ');
      aboutLanguageSpan.appendChild(aboutLanguageSpanText);
      aboutLanguage.appendChild(aboutLanguageSpan);
      let aboutLanguageText = document.createTextNode(bookInfo[i].language);
      aboutLanguage.appendChild(aboutLanguageText);

      let aboutAuthor = document.createElement('p');
      let aboutAuthorSpan = document.createElement('span');
      let aboutAuthorSpanText = document.createTextNode('Author: ');
      aboutAuthorSpan.appendChild(aboutAuthorSpanText);
      aboutAuthor.appendChild(aboutAuthorSpan);
      let aboutAuthorText = document.createTextNode(bookInfo[i].author);
      aboutAuthor.appendChild(aboutAuthorText);

      liTag2.appendChild(headings);
      liTag2.appendChild(aboutLanguage);
      liTag2.appendChild(aboutAuthor);
      ulTag2.appendChild(liTag2);

      let idOfLi = document.getElementsByTagName('li')[i].getAttribute('id');
      let keysOfBookCovers = Object.keys(bookCovers);
      let valuesOfBookCovers = Object.values(bookCovers);

      for (let j = 0; j < keysOfBookCovers.length; j++) {
        if (idOfLi === keysOfBookCovers[j]) {
          let imgTag = document.createElement('img');
          imgTag.setAttribute('src', valuesOfBookCovers[j]);
          imgTag.setAttribute('alt', bookInfo[i].title);
          imgTag.setAttribute('width', '300');
          imgTag.setAttribute('height', '400');
          liTag2.appendChild(imgTag);
        }
      }
    }
  }

  window.onload = createHtml;
}
